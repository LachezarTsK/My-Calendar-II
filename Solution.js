
var MyCalendarTwo = function () {
    this.singleBookings = [];
    this.overlapSingleBookings = [];
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {

    for (let booking of this.overlapSingleBookings) {
        if (booking.start < end && booking.end > start) {
            return false;
        }
    }

    for (let booking of this.singleBookings) {
        if (booking.start < end && booking.end > start) {
            this.overlapSingleBookings.push(new Interval(Math.max(booking.start, start), Math.min(booking.end, end)));
        }
    }
    
    this.singleBookings.push(new Interval(start, end));
    return true;
};

/** 
 * @param {number} start 
 * @param {number} end
 */
function Interval(start, end) {
    this.start = start;
    this.end = end;
}
