package com.example.hotelmanagement.repository;

import com.example.hotelmanagement.model.Reservation;
import com.example.hotelmanagement.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByRoomId(Long roomId);
}
