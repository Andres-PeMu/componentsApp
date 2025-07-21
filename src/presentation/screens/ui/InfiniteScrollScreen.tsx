import React, {useState} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Title} from '../../components/ui/Title';
import {CustomView} from '../../components/ui/CustomView';
import {colors} from '../../../config/theme/theme';
import {FadeInImage} from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    setTimeout(() => {
      setNumbers(prevNumbers => {
        const newNumbers = Array.from(
          {length: 5}, // Carga 5 nuevos elementos por vez
          (_, i) => prevNumbers.length + i,
        );
        return [...prevNumbers, ...newNumbers];
      });
    }, 3000);
  };

  return (
    <CustomView>
      <Title text="Infinite Scroll Screen" safe />
      <FlatList
        data={numbers}
        keyExtractor={item => item.toString()}
        renderItem={({item}) => <ListItem number={item} />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={<Text style={styles.footerText}>Loading...</Text>}
      />
    </CustomView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    marginVertical: 5,
  },
  footerText: {
    textAlign: 'center',
    padding: 10,
    color: colors.text,
  },
});

interface ListItemProps {
  number: number;
}

const ListItem = ({number}: ListItemProps) => {
  return (
    <View style={styles.itemContainer}>
      <FadeInImage
        uri={`https://picsum.photos/id/${number}/500/400`}
        style={{width: '100%', height: 300, resizeMode: 'cover'}}
      />
    </View>
  );
};
