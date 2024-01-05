import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const Search = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    // Thực hiện tìm kiếm dữ liệu dựa trên searchText và lưu kết quả vào searchResults
    // Ví dụ: Gọi API để lấy dữ liệu tìm kiếm
    const results = fetchDataFromAPI(searchText);
    setSearchResults(results);
  };

  return (
    <View>
      <TextInput
        placeholder="Enter search text"
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
      />
      <Button title="Search" onPress={handleSearch} />

      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>{item.title}</ListItem.Title>
              <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
            </ListItem.Content>
          </ListItem>
        )}
        ListEmptyComponent={<Text>No results found</Text>}
      />
    </View>
  );
};

export default Search;
