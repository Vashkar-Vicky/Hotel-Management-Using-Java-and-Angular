import java.time.LocalDate;

public class Main {
    public static void main(String[] args) {

        Room room1 = new Room(1, "101", "Standard", true);
        Reservation reservation1 = new Reservation(1, room1.getRoomId(), "John Doe", LocalDate.now(), LocalDate.now().plusDays(3));
        LongStayBooking longStayBooking1 = new LongStayBooking(1, room1.getRoomId(), "Jane Smith", LocalDate.now(), LocalDate.now().plusMonths(1));
        AddOnService addOnService1 = new AddOnService(1, "Laundry Service", 10.0);
        Billing billing1 = new Billing(1, reservation1.getReservationId(), 150.0);

    }
}