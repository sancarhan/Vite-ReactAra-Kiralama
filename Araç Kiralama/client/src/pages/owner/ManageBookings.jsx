import React, { useEffect, useState } from "react";
import { dummyMyBookingsData } from "../../assets/assets";
import Title from "../../components/owner/Title";

const ManageBookings = () => {
  const currency = import.meta.env.VITE_CURRENCY;
  const [bookings, setBookings] = useState([]);

  const fetchOwnerBookings = async () => {
    setBookings(dummyMyBookingsData);
  };

  useEffect(() => {
    fetchOwnerBookings();
  }, []);

  return (
    <div className="px-4 pt-10 md:px-10 w-full">
      <Title
        title="Rezervasyonları Yönet"
        subTitle="Tüm müşteri rezervasyonlarını takip edin, talepleri onaylayın veya iptal edin ve rezervasyon durumlarını yönetin."
      />

      <div className="max-w-3xl w-full rounded-md overflow-hidden border border-borderColor mt-6">
        <table className="w-full border-collapse text-left text-sm text-gray-600">
          <thead className="text-gray-500">
            <tr>
              <th className="p-3 font-medium">Araba</th>
              <th className="p-3 font-medium max-md-hidden">Tarih Aralığı</th>
              <th className="p-3 font-medium">Toplam</th>
              <th className="p-3 font-medium max-md-hidden">Ödeme</th>
              <th className="p-3 font-medium">Eylem</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index} className="border-t border-borderColor text-gray-500">
                <td className="p-3 flex items-center gap-3">
                  <img src={booking.car.image} className="h-12 w-12 aspect-square rounded-md object-cover" alt="" />
                  <p>{booking.car.brand} {booking.car.model}</p>
                </td>

                <td className="p-3 max-md:hidden">
                  {booking.pickupDate.split('T')[0]} - {booking.returnDate.split('T')[0]}
                </td>

                <td className="p-3">
                  {booking.price}{currency}
                </td>

                <td className="p-3 max-md:hidden">
                 <span className="bg-gra-100 px-3 py-1 rounded-full text-xs">Offline</span>
                </td>

                <td className="p-3">
                  {booking.status === 'confirmed' ? (
                    <select value={booking.status} className="px-2 py-1.5 mt-1 text-gray-500 border border-borderColor rounded-md outline-none">
                      <option value="pending">Beklemede</option>
                      <option value="cancelled">İptal edildi</option>
                      <option value="confirmed">Onaylandı</option>
                    </select>
                  ) : (
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${booking.status === 'confirmed' ? 'bg-green-100 text-green-500' : 'bg-red-100 text-red-500'}`}>
                      {booking.status}
                    </span>
                  )}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
