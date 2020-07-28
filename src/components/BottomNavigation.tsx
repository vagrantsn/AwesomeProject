import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

const MusicRoute = () => <Text>Music</Text>

const AlbumsRoute = () => <Text>Albums</Text>

const MyComponent = ({
  routes,
}: { routes: Array<any> }) => {
  const [index, setIndex] = React.useState(1);

  const renderScene = BottomNavigation.SceneMap({
    list: MusicRoute,
    favorites: AlbumsRoute,
  })

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
