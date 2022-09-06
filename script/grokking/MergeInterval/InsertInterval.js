class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
  print_interval() {
    console.log(`[${start},${end}]`);
  }
}

export default function main() {
  let newInterval = new Interval(4, 6);
  let res = [new Interval(1, 3), new Interval(5, 7), new Interval(8, 12)];


}
