import Lottie from 'lottie-react-native';
import React, {useState} from 'react';
import {
  ColorValue,
  DimensionValue,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';

interface LottieViewerProps {
  backgroundColor: ColorValue;
  imagen: string;
  imgWidth: DimensionValue;
  imgHeight: DimensionValue;
  allowLoop?: boolean;
  contarinerStyles?: ViewStyle;
}

const LottieViewer = ({
  backgroundColor,
  imagen,
  imgWidth,
  imgHeight,
  allowLoop = true,
  contarinerStyles = {},
}: LottieViewerProps) => {
  const [renderLottie, setRenderLottie] = useState(true);

  const handleFinishAnimation = () => {
    if (!allowLoop) {
      setRenderLottie(false);
    }
  };

  return (
    <>
      {renderLottie && (
        <View style={[styles.container, contarinerStyles]}>
          <Lottie
            source={imagen}
            style={[
              styles.lottieStyles,
              {width: imgWidth, height: imgHeight, backgroundColor},
            ]}
            autoPlay={true}
            loop={allowLoop}
            onAnimationFinish={handleFinishAnimation}
          />
        </View>
      )}
    </>
  );
};

export default LottieViewer;

const styles = StyleSheet.create({
  lottieStyles: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
