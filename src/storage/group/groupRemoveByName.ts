import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";
import { groupsGetAll } from "./groupsGetAll";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function groupRemoveByName(groupName: string) {
  try {
    const storedGroups = await groupsGetAll();
    const newGroups = storedGroups.filter((group) => group !== groupName);

    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(newGroups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);
  } catch (error) {
    throw error;
  }
}
