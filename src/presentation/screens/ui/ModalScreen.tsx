import React, {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {Modal, Platform, StyleSheet, View} from 'react-native';
import {Button} from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView margin>
      <Title text="Modal" safe />
      <Button text="Open Modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Title text="Modal Content" safe />
          </View>
          <View style={styles.modalContent} />
          <Button
            text="Close Modal"
            onPress={() => setIsVisible(false)}
            style={styles.closeButton}
          />
        </View>
      </Modal>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
  },
  modalContent: {
    flex: 1,
  },
  closeButton: {
    height: Platform.OS === 'android' ? 50 : 60,
    borderRadius: 0,
  },
});
