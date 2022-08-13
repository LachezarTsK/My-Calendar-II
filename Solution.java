
import java.util.ArrayList;
import java.util.List;

public class MyCalendarTwo {

    private record Interval(int start, int end) {}
    private final List<Interval> singleBookings;
    private final List<Interval> overlapSingleBookings;

    public MyCalendarTwo() {
        singleBookings = new ArrayList<>();
        overlapSingleBookings = new ArrayList<>();
    }

    public boolean book(int start, int end) {

        for (Interval booking : overlapSingleBookings) {
            if (booking.start < end && booking.end > start) {
                return false;
            }
        }

        for (Interval booking : singleBookings) {
            if (booking.start < end && booking.end > start) {
                overlapSingleBookings.add(new Interval(Math.max(booking.start, start), Math.min(booking.end, end)));
            }
        }

        singleBookings.add(new Interval(start, end));
        return true;
    }
}
