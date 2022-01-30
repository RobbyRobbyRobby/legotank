radio.onReceivedNumber(function (receivedNumber) {
    Move(receivedNumber)
})
function RotateServo (num: number) {
    let ServoMin = 0
    ServoCurrent += num
    if (ServoCurrent < ServoMin) {
        ServoCurrent = ServoMin
    }
    if (ServoCurrent > ServoMax) {
        ServoCurrent = ServoMax
    }
    pins.servoWritePin(AnalogPin.P11, ServoCurrent)
}
function Move (Signal: number) {
    if (Signal == 0) {
        motorbit.freestyle(100, 100)
    } else if (Signal == 1) {
        motorbit.freestyle(100, 50)
    } else if (Signal == 2) {
        motorbit.freestyle(100, 0)
    } else if (Signal == 3) {
        motorbit.freestyle(-100, -50)
    } else if (Signal == 4) {
        motorbit.freestyle(-100, -100)
    } else if (Signal == 5) {
        motorbit.freestyle(-50, -100)
    } else if (Signal == 6) {
        motorbit.freestyle(0, 100)
    } else if (Signal == 7) {
        motorbit.freestyle(50, 100)
    } else if (Signal == 8) {
        motorbit.brake()
    } else if (Signal == 10) {
        RotateServo(10)
    } else if (Signal == 11) {
        RotateServo(-10)
    }
}
let ServoCurrent = 0
let ServoMax = 0
radio.setGroup(1)
ServoMax = 10
let ServoCentre = 90
ServoMax = 170
pins.servoWritePin(AnalogPin.P11, ServoCentre)
ServoCurrent = ServoCentre
basic.showIcon(IconNames.Happy)
