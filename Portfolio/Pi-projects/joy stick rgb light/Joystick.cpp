/**********************************************************************
* Filename    : Joystick.cpp
* Description : Read Joystick
* Author      : www.freenove.com
* modification: 2020/03/09
**********************************************************************/
#include <wiringPi.h>
#include <stdio.h>
#include <softPwm.h>
#include <ADCDevice.hpp>

#define ledPinRed 0
#define ledPinGreen 2
#define ledPinBlue 3
#define Z_PinR 1     //define pin for axis Z
#define Z_PinL 4
ADCDevice *adc;  // Define an ADC Device class object

int main(void){
    adc = new ADCDevice();
    printf("Program is starting ... \n");
    
    if(adc->detectI2C(0x48)){    // Detect the pcf8591.
        delete adc;                // Free previously pointed memory
        adc = new PCF8591();    // If detected, create an instance of PCF8591.
    }
    else if(adc->detectI2C(0x4b)){// Detect the ads7830
        delete adc;               // Free previously pointed memory
        adc = new ADS7830();      // If detected, create an instance of ADS7830.
    }
    else{
        printf("No correct I2C address found, \n"
        "Please use command 'i2cdetect -y 1' to check the I2C address! \n"
        "Program Exit. \n");
        return -1;
    }    
    wiringPiSetup();
        
    pinMode(Z_PinL,INPUT);       //set Z_Pin as input pin and pull-up mode
    pinMode(Z_PinR,INPUT);
    pullUpDnControl(Z_PinL,PUD_UP);
    pullUpDnControl(Z_PinR,PUD_UP);
    softPwmCreate(ledPinRed,0,100);
    softPwmCreate(ledPinGreen,0,100);
    softPwmCreate(ledPinBlue,0,100);    
    while(1){
        int val_ZL = digitalRead(Z_PinL);  //read digital value of axis Z
        int val_ZR = digitalRead(Z_PinR);
        int val_YL = adc->analogRead(0);      //read analog value of axis X and Y
        int val_XL = adc->analogRead(1);
        int val_YR = adc->analogRead(2);
        int val_XR = adc->analogRead(3);
        softPwmWrite(ledPinRed,val_YL*100/255);
        softPwmWrite(ledPinGreen,val_XL*100/255);
        softPwmWrite(ledPinBlue,val_YR*100/255);
        
        printf("hi")
        printf("val_XR: %d  ,\tval_YR: %d  ,\tval_ZR: %d \n",val_XR,val_YR,val_ZR);
        delay(100);
    }
    return 0;
}

