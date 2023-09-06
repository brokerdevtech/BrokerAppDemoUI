import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { colors } from '../config/Colors';
import ProfileSection from "../components/profile/ProfileSection"

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.leftHeaderWrapper}>
          <Image
            style={{ width: 20, height: 20 }}
            source={require('../assets/images/profilePage/leftArrow.png')}
          />
        </View>
      </View>
      <ScrollView>
        <TouchableOpacity style={styles.ProfileSectionWrapper}>
          <View style={styles.ImageSection}>
            <Image
              style={styles.userImage}
              source={require('../assets/images/profilePage/face.jpeg')}
            />
            <View>
              <Text style={styles.userName}>Anup Srivastav</Text>
              <Text style={styles.userName_Tag}>Individual</Text>
            </View>
          </View>
          <Image source={require('../assets/images/Left_Arrow.png')} />
        </TouchableOpacity>
        <View style={styles.followersCountSection}>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.messagesButtonWrapper}>
              <Text style={styles.mesagesTitle}>Edit Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messagesButtonWrapper}>
              <Text style={styles.mesagesTitle}>Share Profile</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.Overview}>App Profile Overview</Text>
          <View style={styles.followingCount}>
            <View>
              <Text style={styles.countTitle}>334</Text>
              <Text style={styles.countSubTitle}>Posts</Text>
            </View>
            <View>
              <Text style={styles.countTitle}>211K</Text>
              <Text style={styles.countSubTitle}>Followers</Text>
            </View>
            <View>
              <Text style={styles.countTitle}>134</Text>
              <Text style={styles.countSubTitle}>Following</Text>
            </View>
            <View>
              <Text style={styles.countTitle}>28</Text>
              <Text style={styles.countSubTitle}>Transactions</Text>
            </View>
          </View>
        </View>
        <ProfileSection
          title={"Role Selection"}
          subTitle={"Broker"} />
        <ProfileSection
          title={"KYC Details"}
          subTitle={"Approved"} />
        <ProfileSection
          title={"Office Details"}
          subTitle={"Flatintown.com, faridabad"} />
        <ProfileSection
          title={"Specialization"}
          subTitle={"Commercial, Primary Sale"} />
        <ProfileSection
          title={"Financial Details"}
          subTitle={""} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: "2%"
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10,
    paddingVertical: 10
  },
  headerText: {
    fontSize: 20,
    fontWeight: '700',
  },
  ProfileSectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "flex-start",
    borderBottomColor: colors.gray,
    borderBottomWidth: 1,
  },
  ImageSection: {
    flex: 1,
    height: 90,
    flexDirection: "row"
  },
  followersCountSection: {
    flex: 2,
  },
  userImage: {
    width: 56,
    height: 56,
    borderRadius: 60,
    margin: 13,
    borderWidth: 2,
    borderColor: "#1D7BBF"
  },
  followingCount: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
  },
  messagesButtonWrapper: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.primary,
    width: '48%',
    height: 25,
    padding: 4,
    backgroundColor: "linear-gradient(0deg, #1D7BBF, #1D7BBF),linear-gradient(0deg, rgba(29, 123, 191, 0.1), rgba(29, 123, 191, 0.1))"
  },
  ButtonItemWrapper: {
    borderRadius: 5,
    borderWidth: 2,
    borderColor: colors.gray1,
    padding: 4,
  },
  buttonIcon: {
    width: 25,
    height: 25,
  },
  mesagesTitle: {
    fontWeight: '400',
    fontSize: 10,
    textAlign: 'center',
    color: colors.primary
  },
  countTitle: {
    fontSize: 11,
    fontWeight: '700',
    textAlign: 'center',
  },
  countSubTitle: {
    fontSize: 11,
    fontWeight: '400',
    textAlign: 'center',
  },
  Overview: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 10
  },
  userName: {
    marginTop: 13,
    fontSize: 16,
    fontWeight: '600',
    alignSelf: "auto"
  },
  userName_Tag: {
    marginTop: 5,
    fontSize: 11,
    fontWeight: '400',
    alignSelf: "auto",
    backgroundColor: "#FFD2004D",
    padding: 5,
    borderRadius: 10,
    width: "70%",
    textAlign: "center"
  },
  moreInfoWrapper: {
    marginLeft: 15,
  },
  introText: {
    fontSize: 16,
  },
  urlText: {
    color: colors.blue,
  },
  storiesImage: {
    borderRadius: 70,
    width: 70,
    height: 70,
    borderColor: colors.gray1,
    borderWidth: 3,
    marginRight: 10,
  },
  storiesWrapper: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.gray1,
  },
  storyProfName: {
    textAlign: 'center',
  },
  viewIconsWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imagesWrapper: {
    flexDirection: 'row',
  },
  galleryIMage: {
    flex: 1,
    height: 200,
    margin: 1,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerIcon: {
    width: 60,
    height: 60,
  },
});

export default ProfileScreen;
