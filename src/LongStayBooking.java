import java.time.LocalDate;

public class LongStayBooking {
    private int bookingId;
    private int roomId;
    private String guestName;
    private LocalDate startDate;
    private LocalDate endDate;

    // Constructor
    public LongStayBooking(int bookingId, int roomId, String guestName, LocalDate startDate, LocalDate endDate) {
        this.bookingId = bookingId;
        this.roomId = roomId;
        this.guestName = guestName;
        this.startDate = startDate;
        this.endDate = endDate;
    }

    // Getters and Setters

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public int getRoomId() {
        return roomId;
    }

    public void setRoomId(int roomId) {
        this.roomId = roomId;
    }

    public String getGuestName() {
        return guestName;
    }

    public void setGuestName(String guestName) {
        this.guestName = guestName;
    }

    public LocalDate getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDate startDate) {
        this.startDate = startDate;
    }

    public LocalDate getEndDate() {
        return endDate;
    }

    public void setEndDate(LocalDate endDate) {
        this.endDate = endDate;
    }
}
