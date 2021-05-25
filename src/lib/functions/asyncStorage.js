import AsyncStorage from '@react-native-async-storage/async-storage';
export const STORAGE_KEYS = {
  IS_FULL_APP_PURCHASED: '@is_full_app_purchased',
};

export const storeBooleanData = async (key, value) => {
  try {
    const stringValue = value.toString();
    await AsyncStorage.setItem(key, stringValue);
  } catch (e) {
    console.log(e);
  }
};

// getItem returns a promise that either resolves to stored value when data is found for given key, or returns null otherwise.
export const getBooleanData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    return value === 'true';
  } catch (e) {
    console.log(e);
  }
};
