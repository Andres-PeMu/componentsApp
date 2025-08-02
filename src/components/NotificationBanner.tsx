import React, { useEffect, useMemo } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text, IconButton } from 'react-native-paper';
import { useUIStore } from '../store';

export const NotificationBanner: React.FC = () => {
  const { notifications, removeNotification } = useUIStore();
  const fadeAnim = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    if (notifications.length > 0) {
      // Mostrar notificación
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      // Ocultar notificación
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [notifications.length, fadeAnim]);

  if (notifications.length === 0) {return null;}

  const currentNotification = notifications[0];

  const getNotificationStyle = () => {
    switch (currentNotification.type) {
      case 'success':
        return { backgroundColor: '#10b981', icon: 'check-circle' };
      case 'error':
        return { backgroundColor: '#ef4444', icon: 'alert-circle' };
      case 'warning':
        return { backgroundColor: '#f59e0b', icon: 'alert' };
      case 'info':
        return { backgroundColor: '#3b82f6', icon: 'information' };
      default:
        return { backgroundColor: '#6b7280', icon: 'bell' };
    }
  };

  const notificationStyle = getNotificationStyle();

  return (
    <Animated.View
      style={[
        styles.container,
        { backgroundColor: notificationStyle.backgroundColor },
        { opacity: fadeAnim },
      ]}
    >
      <View style={styles.content}>
        <Text style={styles.icon}>{notificationStyle.icon}</Text>
        <Text style={styles.message}>{currentNotification.message}</Text>
        <IconButton
          icon="close"
          size={20}
          iconColor="#ffffff"
          onPress={() => removeNotification(currentNotification.id)}
          style={styles.closeButton}
        />
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    left: 16,
    right: 16,
    borderRadius: 8,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1000,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    color: '#ffffff',
    fontSize: 20,
    marginRight: 12,
  },
  message: {
    flex: 1,
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '500',
  },
  closeButton: {
    margin: 0,
  },
});
