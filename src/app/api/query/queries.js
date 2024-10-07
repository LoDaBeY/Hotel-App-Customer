export const GETALLROOMS = `SELECT * FROM rooms;`;
export const GetOneRoom = `SELECT * FROM rooms WHERE id = $1;`;
export const CheckAvailableRoomWithDates = `SELECT * FROM rooms WHERE room_availability = true AND room_capacity >= $1;`;
export const CheckIfEmailExists = `SELECT * FROM users WHERE email_address = $1;`;
export const CreateNewUser = `INSERT INTO users (first_name, last_name, email_address, password, phone_number, profile_img) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;`;
export const GETAllBookings = `SELECT 
    bookings.id AS booking_id,
    bookings.number_of_guests,
    bookings.number_of_children,
    bookings.booking_date,
    bookings.special_requests,
    users.first_name AS user_firstname,
    users.last_name AS user_lastname,
    rooms.image AS rooms_image,
    users.email_address AS user_emailaddress,
    rooms.room_type
FROM 
    bookings
JOIN 
    users ON bookings.user_id = users.id
JOIN 
    rooms ON bookings.room_id = rooms.id;`;

export const GetAllDining = `SELECT 
    dining.id AS dining_id,
    dining.people,
    dining.time,
    dining.date,
    dining.reservation_timestamp,
    users.first_name AS user_firstname,
    users.last_name AS user_lastname,
    users.profile_img AS image
FROM 
    dining
JOIN 
    users ON dining.user_id = users.id;`;

export const getBookingPerUser = `SELECT * FROM bookings WHERE user_id = $1;`;
export const getBookingRoomPerUser = `SELECT 
    users.id AS user_id,
    bookings.id AS booking_id,
    bookings.check_in_date,
    bookings.check_out_date,
    rooms.image AS rooms_image,
    rooms.room_type,
    rooms.title,
    rooms.description,
    rooms.price_per_night,
    rooms.services
FROM 
    bookings
JOIN 
    users ON users.id = bookings.user_id
JOIN 
    rooms ON bookings.room_id = rooms.id
    WHERE 
    users.id = $1;`;

export const InsertNewBooking = `INSERT INTO bookings (user_id, room_id, number_of_guests, number_of_children, check_in_date, check_out_date, booking_date, special_requests) VALUES ($1, $2, $3, $4, $5, $6, $7, $8);`;

export const InsertDiningReservation = `INSERT INTO dining (date, time, people, user_id) VALUES ($1, $2, $3 , $4);`;

export const GETALLRESERVATIONS = `SELECT * FROM reservations;`;

export const GETAllReviews = `SELECT 
    users.id AS user_id,
    users.first_name AS user_firstname,
    users.last_name AS user_lastname,
    reviews.content,
    reviews.avatar,
    reviews.rating,
    reviews.created_at,
    reviews.responded
FROM 
    reviews
JOIN 
    users ON users.id = reviews.author;`;
export const InsertReview = `INSERT INTO reviews (author, content, avatar, rating)
VALUES ($1, $2, $3, $4);`;

export const AcceptReview = `UPDATE reviews SET responded = true WHERE author = $1;`;
export const DeleteReview = `UPDATE reviews SET responded = false WHERE author = $1;`;

export const GETApprovedReviews = `SELECT 
reviews.rating AS rating,
reviews.author AS author,
reviews.content AS content,
reviews.avatar AS avatar,
reviews.responded AS responded,
reviews.created_at AS created_at,
users.first_name AS user_firstname,
users.last_name AS user_lastname
FROM reviews

JOIN 
    users ON users.id = reviews.author

WHERE responded = true;`;
