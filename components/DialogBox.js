import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogContent,
  DialogActions,
  Text,
} from "@react-native-material/core";

const DialogBox = ({ visibility, headerText, contentText, onDismiss, onPressPositive, onPressNegative }) => {
  return (
      <Dialog visible={visibility} onDismiss={onDismiss}>

        <DialogHeader title={headerText} />

        <DialogContent>
          <Text>
            {contentText}
          </Text>
        </DialogContent>

        <DialogActions>
          <Button
            title="Cancel"
            compact
            variant="text"
            onPress={onPressNegative}
          />
          <Button
            title="Ok"
            compact
            variant="text"
            onPress={onPressPositive}
          />
        </DialogActions>

      </Dialog>
  );
};


export default DialogBox;