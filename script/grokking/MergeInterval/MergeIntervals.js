class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  get_interval() {
    return `[${this.start}, ${this.end}]`;
  }
}

function merge(intervals) {
  intervals.sort((a, b) => a.start - b.start);
  const mergeIntervals = [];
  // Take the first element
  let start = intervals[0].start;
  let end = intervals[0].end;
  // Check the previous element with the current element
  for (let index = 1; index < intervals.length; index++) {
    // If the prev end is greater than the start
    let interval = intervals[index];
    if (interval.start <= end) {
      end = Math.max(end, interval.end);
    } else {
      mergeIntervals.push(new Interval(start, end));
      // Then make max of current and prev end
      // if not then push start and end
      end = interval.end;
      start = interval.start;
      // Update start and end
    }
  }

  mergeIntervals.push(new Interval(start, end));
  return mergeIntervals;
}

export default function main() {
  console.log("Hey, there");
  let arr = [new Interval(6, 7), new Interval(2, 4), new Interval(5, 9)];
  arr = merge(arr);
  arr.map((item) => {
    console.log(item.get_interval());
  });
}
