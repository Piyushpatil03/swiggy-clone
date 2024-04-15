import {
  SafeAreaView,
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  Pressable,
  ScrollView,
} from "react-native";
import TopBar from "./TopBar";
import { FlatList } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { useEffect, useRef, useState } from "react";

const SwiggyFood = () => {
  const flatlistRef = useRef();
  const screenWidth = Dimensions.get("window").width;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      if (activeIndex === carouselData.length - 1) {
        flatlistRef.current.scrollToIndex({
          index: 0,
          animation: true,
        });
      } else {
        flatlistRef.current.scrollToIndex({
          index: activeIndex + 1,
          animation: true,
        });
      }
    }, 10000);

    return () => clearInterval(interval);
  });

  const getItemLayout = (data, index) => ({
    length: 350,
    offset: screenWidth * index,
    index: index,
  });

  const carouselData = [
    {
      id: "01",
      image: require("../assets/slide-1.png"),
    },
    {
      id: "02",
      image: require("../assets/slide-1.png"),
    },
    {
      id: "03",
      image: require("../assets/slide-1.png"),
    },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image
          source={item.image}
          style={{
            height: 200,
            width: 350,
            resizeMode: "contain",
            marginHorizontal: "20px",
          }}
        />
      </View>
    );
  };

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = screenWidth / 350;
    setActiveIndex(index);
  };

  // Render Dot Indicators
  const renderDotIndicators = () => {
    return carouselData.map((dot, index) => {
      if (activeIndex === index) {
        return (
          <View
            style={{
              backgroundColor: "black",
              height: 7,
              width: 7,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          ></View>
        );
      } else {
        return (
          <View
            key={index}
            style={{
              backgroundColor: "black",
              height: 5,
              width: 5,
              borderRadius: 5,
              marginHorizontal: 6,
            }}
          ></View>
        );
      }
    });
  };

  return (
    <ScrollView scrollEnabled>
      <View style={{ flex: 1 }}>
        <TopBar number={2} />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: "15px",
            marginTop: "20px",
            marginBottom: "10px",
          }}
        >
          <View>
            <Text
              style={{
                color: "#e81c4c",
                fontSize: "14px",
                fontFamily: "sans-serif",
                marginTop: "20px",
                fontWeight : 600
              }}
            >
              Exclusive
            </Text>
            <Text
              style={{
                color: "#ff5319",
                fontFamily: "Verdana",
                fontWeight: 700,
                fontSize: "28px",
                marginTop: "5px",
                letterSpacing: "1px",
              }}
            >
              Food Fiesta
            </Text>
            <Text
              style={{
                color: "grey",
                fontSize: "14px",
                fontFamily: "sans-serif",
                marginTop: "5px",
                fontWeight : 600
              }}
            >
             2 Offers in 1 Order
            </Text>

          </View>
          <Image
            source={require("../assets/home-1.png")}
            style={styles.image}
          />
        </View>



        <FlatList
          data={carouselData}
          ref={flatlistRef}
          getItemLayout={getItemLayout}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          horizontal={true}
          onScroll={handleScroll}
          pagingEnabled={false}
          style={{ marginTop: "-50px" }}
          showsHorizontalScrollIndicator={false}
        />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "-30px",
          }}
        >
          {renderDotIndicators()}
        </View>

        <View
          style={{
            flexDirection: "row",
            marginHorizontal: "15px",
            justifyContent: "space-between",
            marginTop: "15px",
          }}
        >
          {/* Card 1 */}
          <View style={styles.card}>
            <Pressable>
              <Text style={{ fontWeight: "700", color: "#262626" }}>
                GULTFREE {"\n"} OPTIONS
              </Text>
              <Image
                source={require("../assets/bowl-1.jpg")}
                style={styles.cardImage}
              />
            </Pressable>
          </View>

          {/* Card 2 */}
          <View style={styles.card}>
            <Pressable>
              <Text style={{ fontWeight: "700", color: "#262626" }}>
                GOURMET {"\n"} DELIGHTS
              </Text>
              <Image
                source={require("../assets/bowl-1.jpg")}
                style={styles.cardImage}
              />
            </Pressable>
          </View>
        </View>

        {/* OFFERS */}
        <View>
          <Text style={styles.offerText}>OFFERS FOR YOU</Text>

          <View
            style={{
              flexDirection: "row",
              marginHorizontal: "15px",
              justifyContent: "space-between",
            }}
          >
            {/* Card 1 */}
            <View style={styles.card2}>
              <Image
                source={require("../assets/man.png")}
                style={styles.cardImage2}
              />
              <View styles={{ left: 20 }}>
                <Text
                  style={{
                    fontWeight: "700",
                    color: "#3f00de",
                    fontSize: "18px",
                    marginLeft: "30px",
                  }}
                >
                  Pocket Hero
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    color: "#3f00de",
                    marginLeft: "30px",
                  }}
                >
                  Up to 60% off
                </Text>
              </View>
            </View>

            {/* Card 2 */}
            <View style={styles.card2}>
              <View>
                <Text
                  style={{
                    fontWeight: "700",
                    color: "#3f00de",
                    fontSize: "18px",
                    marginLeft: "30px",
                  }}
                >
                  More Offers
                </Text>
                <Text
                  style={{
                    fontWeight: "400",
                    color: "#3f00de",
                    marginLeft: "30px",
                  }}
                >
                  Buy 1 Get 1
                </Text>
              </View>

              <Image
                source={require("../assets/man.png")}
                style={styles.cardImage2}
              />
            </View>
          </View>
        </View>

        {/* Scrollable Component */}
        <View>
          <Text style={styles.offerText}>YOUR TRUSTED PICKS</Text>

          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 5,
              borderRadius: 15,
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: "18px" }}>Restaurant 1</Text>
            <Text style={{ fontSize: "15px" }}>Address - Bangalore</Text>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 5,
              borderRadius: 15,
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: "18px" }}>Restaurant 2</Text>
            <Text style={{ fontSize: "15px" }}>Address - Pune</Text>
          </View>
          <View
            style={{
              marginHorizontal: 15,
              marginVertical: 5,
              borderRadius: 15,
              borderWidth: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              padding: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: "18px" }}>Restaurant 3</Text>
            <Text style={{ fontSize: "15px" }}>Address - Mumbai</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SwiggyFood;

const styles = StyleSheet.create({
  image: {
    resizeMode: "contain",
    width: "400px",
    maxHeight: "150px",
    marginBottom: 0,
  },
  card: {
    backgroundColor: "white",
    width: "49%",
    borderColor: "grey",
    borderRadius: "15px",
    borderWidth: "1px",
    padding: "20px",
    position: "relative",
    zIndex: 2,
    overflow: "hidden",
  },
  cardImage: {
    width: "70px",
    height: "70px",
    position: "absolute",
    right: -30,
    bottom: -30,
    zIndex: 1,
  },
  offerText: {
    marginHorizontal: "15px",
    fontFamily: "Verdana",
    color: "#2b2b2b",
    letterSpacing: "1.5px",
    fontSize: "12px",
    marginTop: "20px",
    marginBottom: "10px",
  },
  card2: {
    backgroundColor: "#e2d6ff",
    width: "49%",
    borderColor: "grey",
    borderRadius: "15px",
    borderWidth: "1px",
    padding: "20px",
    position: "relative",
    zIndex: 2,
    overflow: "hidden",
  },
  cardImage2: {
    width: "60px",
    height: "80px",
    position: "absolute",
    left: -8,
    zIndex: 1,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
