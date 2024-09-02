const Booking = require('../models/booking');

exports.createBooking = async (req, res) => {
    try {
        const bookingData = req.body;
        console.log("booking details:", bookingData);

        // Map form data to schema fields
        const booking = new Booking({
            from: bookingData.from,
            to: bookingData.to,
            airline: bookingData.airline,
            seating: bookingData.seating,
            departureDate: bookingData.departureDate,
            departureTime: bookingData.departureTime,
            adults: bookingData.adults,
            children: bookingData.children,
            infants: bookingData.infants,
            fareType: bookingData.fareType,
            returnDate: bookingData.returnDate,
            returnTime: bookingData.returnTime,
            message: bookingData.message,
            name: bookingData.name,
            phone: bookingData.phone,
            email: bookingData.email
        });

        await booking.save();
        res.status(201).json({ message: 'Booking created successfully' });
    } catch (err) {
        console.error('Error creating booking:', err);
        res.status(500).json({ message: 'Server error' });
    }
};
