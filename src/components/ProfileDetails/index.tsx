import { ProfileData } from '@/pages/profile/[id]'
import { Container, ProfileDetailsWrapper, UserInfo } from './styles';
import { Avatar } from '../ui/Avatar';
import { Heading, Text } from '../Typography';
import { ProfileDetailItem } from './ProfileDetailItem';
import { BookOpen, BookmarkSimple, Books, UserList } from '@phosphor-icons/react';

type ProfileDetailsProps = {
  profile: ProfileData;
}

export const ProfileDetails = ({ profile }: ProfileDetailsProps) => {
  const memberSinceYear = new Date(profile.user.member_since).getFullYear()

  return (
    <Container>
      <UserInfo>
        <Avatar src={profile.user.avatar_url} alt={profile.user.name} size="lg" />
        <Heading size="md" css={{ marginTop: 20 }}>{profile.user.name}</Heading>
        <Text size="sm" color="gray-400">membro desde {memberSinceYear}</Text>
      </UserInfo>

      <ProfileDetailsWrapper>
        <ProfileDetailItem
          icon={<BookOpen />}
          info={profile.readPages}
          label='Páginas lidas'
        />

        <ProfileDetailItem
          icon={<Books />}
          info={profile.ratedBooks}
          label='Livros avaliados'
        />

        <ProfileDetailItem
          icon={<UserList />}
          info={profile.readAuthors}
          label='Autores lidos'
        />
        {profile.mostReadCategory && (
          <ProfileDetailItem
            icon={<BookmarkSimple />}
            info={profile.mostReadCategory}
            label='Categoria mais lida'
          />
        )}
      </ProfileDetailsWrapper>
    </Container>
  )
}