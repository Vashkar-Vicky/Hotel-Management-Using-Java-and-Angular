package com.example.hotelmanagement.service;

import com.example.hotelmanagement.model.Reservation;
import com.example.hotelmanagement.model.Room;
import com.example.hotelmanagement.repository.ReservationRepository;
import com.example.hotelmanagement.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    @Autowired
    private RoomRepository roomRepository;

    public Reservation saveReservation(Reservation reservation) {
        // Fetch and set Room from the database to avoid null references
        Room room = roomRepository.findById(reservation.getRoom().getId()).orElseThrow(() -> new RuntimeException("Room not found"));
        reservation.setRoom(room);

        return reservationRepository.save(reservation);
    }

    public List<Reservation> getAllReservations() {
        return reservationRepository.findAll();
    }

    public void deleteReservation(Long reservationId) {
        reservationRepository.deleteById(reservationId);
    }
}