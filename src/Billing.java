public class Billing {
    private int billingId;
    private int reservationId;
    private double totalAmount;

    // Constructor
    public Billing(int billingId, int reservationId, double totalAmount) {
        this.billingId = billingId;
        this.reservationId = reservationId;
        this.totalAmount = totalAmount;
    }

    // Getters and Setters

    public int getBillingId() {
        return billingId;
    }

    public void setBillingId(int billingId) {
        this.billingId = billingId;
    }

    public int getReservationId() {
        return reservationId;
    }

    public void setReservationId(int reservationId) {
        this.reservationId = reservationId;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    // Other methods as needed for Billing entity
}
