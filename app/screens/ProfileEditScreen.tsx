import React, {Fragment} from 'react';
import {Image, Platform, Pressable, StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import COLORS from '../styles/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {launchImageLibrary} from 'react-native-image-picker';
import {useStore} from '../stores/StoreContext.tsx';
import {observer} from 'mobx-react';
import ScreenBg from '../components/ScreenBg.tsx';
import CustomInput from '../components/CustomInput.tsx';
import MyButton from '../components/MyButton.tsx';
import MyHeader from '../components/MyHeader.tsx';

const ProfileEditScreen = ({navigation}: any) => {
  const {productStore} = useStore();
  const {
    avatarUrl,
    setAvatarUrl,
    name,
    setName,
    setShowEditProfile,
    age,
    setAge,
    showEditProfile,
  } = productStore;
  const isDisabled = !name?.length || !avatarUrl?.length;

  const handleSubmit = () => {
    navigation.navigate('MainTab');
  };

  async function handlePickImage() {
    const result = await launchImageLibrary({mediaType: 'photo'});
    // @ts-ignore
    result.assets && setAvatarUrl(result.assets[0].uri);
  }

  function handleSave() {
    navigation.navigate('MainTab');
    setShowEditProfile(false);
  }

  return (
    <ScreenBg>
      <SafeAreaView
        edges={['top']}
        style={[styles.container, !showEditProfile && {paddingTop: 20}]}>
        {!showEditProfile && <MyHeader title={'Settings'} />}
        <View style={styles.topContainer}>
          <Pressable onPress={handlePickImage} style={{alignItems: 'center'}}>
            {avatarUrl ? (
              <Image
                source={{uri: avatarUrl}}
                style={{width: 140, height: 140, borderRadius: 100}}
              />
            ) : (
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/img.png')}
                  style={{width: 64, height: 64}}
                />
              </View>
            )}
            <Text style={styles.chooseIconText}>Choose an avatar</Text>
          </Pressable>
          <Formik
            initialValues={{
              name: '',
              email: '',
              subject: '',
              message: '',
            }}
            onSubmit={handleSubmit}>
            {({handleChange, handleSubmit, values, errors, touched}) => (
              <View style={styles.formContainer}>
                <CustomInput
                  label={'Enter your name'}
                  style={styles.input}
                  placeholder="Enter the name..."
                  placeholderTextColor={COLORS.grayText}
                  value={name}
                  onChangeText={setName}
                />
                <CustomInput
                  label={'How old are you?'}
                  style={styles.input}
                  placeholder="Enter the text..."
                  placeholderTextColor={COLORS.grayText}
                  value={age}
                  onChangeText={setAge}
                />
              </View>
            )}
          </Formik>
        </View>
      </SafeAreaView>
      {showEditProfile && (
        <Fragment>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 12,
              textAlign: 'center',
              marginBottom: 16,
            }}
            onPress={handleSave}>
            Skip
          </Text>
          <MyButton
            isDisabled={isDisabled}
            onPress={handleSave}
            title={'Go'}
            containerStyle={{marginBottom: 100}}
          />
        </Fragment>
      )}
    </ScreenBg>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginVertical: 20,
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    padding: 15,
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  messageInput: {
    height: 100,
    textAlignVertical: 'top',
    paddingTop: 15,
  },
  error: {
    color: COLORS.error,
    fontSize: 12,
    marginBottom: 10,
    marginLeft: 20,
  },
  buttonContainer: {
    alignItems: 'center',
    ...Platform.select({
      android: {
        paddingBottom: 20,
      },
    }),
  },
  headerText: {
    fontSize: 40,
    fontWeight: '900',
    color: COLORS.white,
    marginLeft: 20,
    marginVertical: 20,
  },
  inputWrapper: {
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    color: COLORS.transparentWhite,
    fontWeight: '400',
    fontSize: 16,
    marginBottom: 4,
    borderRadius: 12,
    paddingHorizontal: 8,
  },
  inputContainer: {
    height: 45,
    borderRadius: 12,
    overflow: 'hidden',
    paddingHorizontal: 10,
    backgroundColor: COLORS.transparentBg,
  },
  input: {
    flex: 1,
    color: COLORS.white,
    paddingHorizontal: 20,
  },
  iconContainer: {
    width: 140,
    height: 140,
    borderRadius: 100,
    backgroundColor: COLORS.primary,
    padding: 38,
  },
  chooseIconText: {
    fontSize: 18,
    fontWeight: 600,
    color: COLORS.white,
    marginTop: 20,
  },
  imageBg: {
    width: 140,
    height: 140,
    borderRadius: 100,
    padding: 38,
    overflow: 'hidden',
  },
  button: {
    alignSelf: 'center',
  },
  topContainer: {
    width: '100%',
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  editBtn: {
    backgroundColor: COLORS.white,
    paddingVertical: 5,
    paddingHorizontal: 30,
    borderRadius: 12,
    marginTop: 12,
    alignSelf: 'flex-end',
    marginRight: 16,
  },
  btnTitle: {
    color: COLORS.primary,
    fontSize: 16,
    fontWeight: 600,
  },
});

export default observer(ProfileEditScreen);
