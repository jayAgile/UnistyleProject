import React, {
  forwardRef,
  memo,
  Ref,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';
import {ActivityIndicator, Modal, View} from 'react-native';

import styles from './styles';

/**
 * Interface representing the loader instance.
 * @interface ILoader
 */
export interface ILoader {
  showLoader(): void;
  hideLoader(): void;
}
/**
 * Represents a modal loader component.
 * @param {RefObject} ref - Ref for accessing component methods.
 *
 * @exports AppLoader - Modal loader component.
 */
export const AppLoader = memo(
  forwardRef((_, ref: Ref<ILoader | undefined>) => {
    // Destructuring isLoading and setLoading
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // Exposes component methods through ref
    useImperativeHandle(ref, () => ({
      // Methods connected to `ref`
      showLoader: () => {
        showLoader();
      },
      hideLoader: () => {
        hideLoader();
      },
    }));

    // Function to show loader
    const showLoader = useCallback((): void => {
      setIsLoading(true);
    }, []);

    // Function to hide loader
    const hideLoader = useCallback((): void => {
      setIsLoading(false);
    }, []);

    return (
      <Modal
        animationType="fade"
        visible={isLoading}
        transparent
        statusBarTranslucent>
        <View style={styles.container}>
          {/* Loader component */}
          <ActivityIndicator color={'red'} size="large" />
        </View>
      </Modal>
    );
  }),
);
