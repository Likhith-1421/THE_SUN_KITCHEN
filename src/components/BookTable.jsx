import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../api/axios';
import './BookTable.css';

export default function BookTable() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    Name: '',
    age: '',
    Mobile: '',
    email: '',
    Members: '',
    paymentStuatus: false,
    bookingDate: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    setSuccess('');

    try {
      const payload = {
        Name: form.Name.trim(),
        Mobile: form.Mobile.trim(),
        email: form.email.trim(),
        Members: Number(form.Members),
        bookingDate: new Date(form.bookingDate).toISOString(),
        paymentStuatus: form.paymentStuatus,
      };

      if (form.age !== '') {
        payload.age = Number(form.age);
      }

      const response = await api.post('/api/BookingTable', payload);
      setSuccess(response.data.message || 'Booking confirmed!');
      setTimeout(() => navigate('/home'), 2000);
    } catch (err) {
      setError(err.response?.data?.message || 'Booking failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="book-table-page">
      <div className="book-table-card">
        <h2 className="book-table-title">Book a Table</h2>
        <p className="book-table-subtitle">
          Reserve your spot at The Sunset Kitchen
        </p>

        <form className="book-table-form" onSubmit={handleSubmit}>
          <div className="book-table-grid">
            <div className="book-table-field">
              <label htmlFor="Name">Full Name *</label>
              <input
                id="Name"
                name="Name"
                type="text"
                className="book-table-input"
                value={form.Name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="book-table-field">
              <label htmlFor="age">Age</label>
              <input
                id="age"
                name="age"
                type="number"
                min="1"
                className="book-table-input"
                value={form.age}
                onChange={handleChange}
              />
            </div>

            <div className="book-table-field">
              <label htmlFor="Mobile">Mobile Number *</label>
              <input
                id="Mobile"
                name="Mobile"
                type="tel"
                className="book-table-input"
                value={form.Mobile}
                onChange={handleChange}
                required
              />
            </div>

            <div className="book-table-field">
              <label htmlFor="email">Email *</label>
              <input
                id="email"
                name="email"
                type="email"
                className="book-table-input"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="book-table-field">
              <label htmlFor="Members">Number of Guests *</label>
              <input
                id="Members"
                name="Members"
                type="number"
                min="1"
                className="book-table-input"
                value={form.Members}
                onChange={handleChange}
                required
              />
            </div>

            <div className="book-table-field">
              <label htmlFor="bookingDate">Date & Time *</label>
              <input
                id="bookingDate"
                name="bookingDate"
                type="datetime-local"
                className="book-table-input"
                value={form.bookingDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="book-table-footer">
            <div className="book-table-field book-table-checkbox">
              <label>
                <input
                  name="paymentStuatus"
                  type="checkbox"
                  checked={form.paymentStuatus}
                  onChange={handleChange}
                />
                Payment completed
              </label>
            </div>

            {error && <p className="book-table-error">{error}</p>}
            {success && <p className="book-table-success">{success}</p>}

            <button
              type="submit"
              disabled={submitting}
              className="book-table-submit"
            >
              {submitting ? 'Booking...' : 'Confirm Booking'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}