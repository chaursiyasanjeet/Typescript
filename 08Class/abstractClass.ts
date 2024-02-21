//no objects can be created from abstract class
abstract class TakePhoto {
  constructor(public cameraMode: string, public filter: string) {}
  abstract getSepia(): void;
  getReelTime(): number {
    return 8;
  }
}

// const sanjeet = new TakePhoto("white", "sunflow");

//class inherited from abstract can be created
class Instagram extends TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public brust: number
  ) {
    super(cameraMode, filter);
  }

  getSepia(): void {
    console.log("Sepia");
  }
}

const sanjeet = new Instagram("night", "beauty", 4);
sanjeet.getReelTime();
