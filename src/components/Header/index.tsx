import { useNavigation } from '@react-navigation/native';
import { Container, Logo, BackIcon, BackButton } from './styles';
import LogoImg from '@assets/logo.png';

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.navigate('groups');
  };

  return (
    <Container>
      {showBackButton &&
        <BackButton onPress={handleBack}>
          <BackIcon />
        </BackButton>
      }
      <Logo source={LogoImg} />
    </Container>
  );
}
