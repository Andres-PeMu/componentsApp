import prompt from 'react-native-prompt-android';


interface Options {
  title: string;
  subtitle?: string;
  buttons: PrompButton[];
  prompType?: 'plain-text' | 'secure-text';
  placeholder?: string;
  defaultValue?: string;
}

interface PrompButton {
  text: string;
  onPress: () => void;
  style?: 'default' | 'cancel' | 'destructive';
}

export const showPrompt = ({
  title,
  subtitle,
  buttons,
  prompType = 'plain-text',
  placeholder,
  defaultValue,
}: Options): void => {
  prompt(
    title,
    subtitle,
    buttons,
    {
      type: prompType,
      cancelable: false,
      defaultValue: defaultValue,
      placeholder: placeholder,
    },
  );
};
