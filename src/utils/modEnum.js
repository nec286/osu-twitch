const None = 0;
const NoFail = 1;
const Easy = 2;
const NoVideo = 4; // Not used anymore; but can be found on old plays like Mesita on b/78239
const Hidden = 8;
const HardRock = 16;
const SuddenDeath = 32;
const DoubleTime = 64;
const Relax = 128;
const HalfTime = 256;
const NightCore = 512; // Only set along with DoubleTime. i.e = NC only gives 576
const Flashlight = 1024;
const Autoplay = 2048;
const SpunOut = 4096;
const Relax2 = 8192;	// Autopilot?
const Perfect = 16384; // Only set along with SuddenDeath. i.e = PF only gives 16416
const Key1 = 67108864;
const Key2 = 268435456;
const Key3 = 134217728;
const Key4 = 32768;
const Key5 = 65536;
const Key6 = 131072;
const Key7 = 262144;
const Key8 = 524288;
const Key9 = 16777216;
const Key10 = 33554432;
const keyMod = Key4 | Key5 | Key6 | Key7 | Key8;
const FadeIn = 1048576;
const Random = 2097152;
const LastMod = 4194304;
const FreeModAllowed = NoFail | Easy | Hidden | HardRock | SuddenDeath | Flashlight | FadeIn | Relax | Relax2 | SpunOut | keyMod;

const mods = {
  None,
  NoFail,
  Easy,
  NoVideo,
  Hidden,
  HardRock,
  SuddenDeath,
  DoubleTime,
  Relax,
  HalfTime,
  NightCore,
  Flashlight,
  Autoplay,
  SpunOut,
  Relax2,
  Perfect,
  Key1,
  Key2,
  Key3,
  Key4,
  Key5,
  Key6,
  Key7,
  Key8,
  Key9,
  Key10,
  keyMod,
  FadeIn,
  Random,
  LastMod,
  FreeModAllowed
};

function key(value) {
  return Object.keys(mods).find(key => mods[key] === value);
}

function read(byte) {
  const bits = Number(byte).toString(2).split('').reverse();
  const keys = [];
  for(var i=0, j=1; i<bits.length; i++, j*=2) {
    if(bits[i] === '1') keys.push(key(j));
  }
  return keys;
}

export default { key, read };
