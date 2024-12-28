import React, {useState} from 'react';
import {CustomView} from '../../components/ui/CustomView';
import {Card} from '../../components/ui/Card';
import {Switch} from 'react-native';
import {CustomSwitches} from '../../components/ui/CustomSwitches';
import {Separator} from '../../components/ui/Separator';

export const SwitchScreen = () => {
  // const [isEnabled, setIsEnabled] = useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    inHappy: true,
  });

  return (
    <CustomView style={{marginTop: 100, paddingHorizontal: 10}}>
      <Card>
        <CustomSwitches
          isOn={state.isActive}
          onChange={value => setState({...state, isActive: value})}
          text="Activo"
        />
        <Separator />
        <CustomSwitches
          isOn={state.isHungry}
          onChange={value => setState({...state, isHungry: value})}
          text="isHungry"
        />
        <Separator />
        <CustomSwitches
          isOn={state.inHappy}
          onChange={value => setState({...state, inHappy: value})}
          text="inHappy"
        />
      </Card>
    </CustomView>
  );
};
