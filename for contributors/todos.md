# To-Dos

- List software support
  - have a page that shows software like Plex, Spotify, YouTube etc, and list all compatible devices. JSON file could just be lists with compatible UIDs in it.
- Notes/comments for devices
  - example: Google Nest speakers have bluetooth to connect headphones and such, but I wouldn't consider that to go under "tech", since that's moreso how it communicates with other smart home devices. Another example is something like a phillips hue light having `"Hub": "Proprietary"`. That's technically true, but certain devices (such as SmartThings hub) are Hue compatible. The best way to communicate that, I'm unsure.
- "Half-compatible" platforms
  - For something like Home Assistant, devices like the Nest Mini show as generic cast devices. So, in a way they're compatible, but not fully.
  - Another example would be certain "Google Home" integrations. Some platforms (Alarm.com and MyQ are ones I can think of) offer integration, but in reality all it enables is saying "Hey Google, tell X to do Y". The devices do not show in the Google Home app next to the rest of your devices, and so I wouldn't consider that to be very integrated. Perhaps having `"Software": [ "Google Home*" ]` or something similar could be a solution, but for now I'll leave it as-is.
  