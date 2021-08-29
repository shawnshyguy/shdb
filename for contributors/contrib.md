# Contributor notes

Please read over a couple of guidelines before submitting a PR:

- For device type, please don't list it as "smart" - just the device type will do (i.e. "Speaker" instead of "Smart Speaker")
- For tech, please choose one of the following:
  - WiFi (use this if it uses Ethernet as well)
  - Thread
  - Zigbee
  - Z-Wave
  - Matter
  - Bluetooth
  - IR
- For a device that requires a hub, set `"Hub"` to either `"Proprietary"` if it requires a proprietary hub, like Phillips Hue, or the protocol it uses (i.e. `"Z-Wave"`) if it can use any hub with the same protocol.
- If the device itself is a hub, set all compatibile protocols for `"Tech"`. For example, for the SmartThings Hub, this would be WiFi, ZigBee, Z-Wave, and Bluetooth.
- For software, choose one of the following:
  - Google Home
  - SmartThings
  - Alexa
  - HomeKit
  - HomeAssistant
  - Proprietary (i.e. TP-Link app)

    if another software should be listed, please open an issue.

I know there's a lot of oddities and special cases with smart home devices, so if you're unsure on anything, or if I missed something, just open an issue.
