// components/DetailComponent.js
import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import useFetchData from '../hooks/useFetchData';

const DetailComponent = ({ detailId }) => {
  const [url, setUrl] = React.useState(null);

  React.useEffect(() => {
    if (detailId) {
      setUrl(`https://jsonplaceholder.typicode.com/posts/${detailId}`);
    }
  }, [detailId]);

  const { data, loading, error } = useFetchData(url);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {data ? (
        <Text style={styles.text}>{JSON.stringify(data, null, 2)}</Text>
      ) : (
        <Text style={styles.text}>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  text: {
    fontSize: 16,
  },
});

export default DetailComponent;
