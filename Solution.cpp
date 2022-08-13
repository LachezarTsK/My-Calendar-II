
#include <vector>
using namespace std;

class MyCalendarTwo {

    struct Interval {
        int start;
        int end;
        Interval(int start, int end) : start {start}, end {end}{}
    };
  
    vector<Interval> singleBookings;
    vector<Interval> overlapSingleBookings;
    
public:
    MyCalendarTwo() = default;

    bool book(int start, int end) {
        for (const auto& booking : overlapSingleBookings) {
            if (booking.start < end && booking.end > start) {
                return false;
            }
        }

        for (const auto& booking : singleBookings) {
            if (booking.start < end && booking.end > start) {
                overlapSingleBookings.push_back(Interval(max(booking.start, start), min(booking.end, end)));
            }
        }
        
        singleBookings.push_back(Interval(start, end));
        return true;
    }
};
