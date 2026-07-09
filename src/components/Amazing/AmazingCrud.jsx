import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addAmazingCrudSlide,
  updateAmazingCrudSlide,
  deleteAmazingCrudSlide,
  fetchAmazingCrud,
} from "../Redux/AmazingCrud/ActionAmazingCrud";

const emptyForm = {
  img: "",
  text: "",
  price: "",
  pureprice: "",
  percentage: "",
};

const AmazingCrud = ({ open, onClose, onChanged }) => {
  const dispatch = useDispatch();
  const { amazing = {}, loading, error } = useSelector(
    (state) => state.amazingCrud || {}
  );

  const [form, setForm] = useState(emptyForm);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    if (open) {
      dispatch(fetchAmazingCrud());
    }
  }, [dispatch, open]);

  if (!open) return null;

  const resetForm = () => {
    setForm(emptyForm);
    setEditId(null);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClose = () => {
    resetForm();
    onClose?.();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (editId) {
      await dispatch(updateAmazingCrudSlide(editId, form));
    } else {
      await dispatch(addAmazingCrudSlide(form));
    }

    resetForm();
    onChanged?.();
  };

  const handleEdit = (item) => {
    setEditId(item.id);

    setForm({
      img: item.img || "",
      text: item.text || "",
      price: item.price || "",
      pureprice: item.pureprice || "",
      percentage: item.percentage || "",
    });
  };

  const handleDelete = async (id) => {
    await dispatch(deleteAmazingCrudSlide(id));
    onChanged?.();

    if (editId === id) {
      resetForm();
    }
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/40 font-[iran]">
      <div className="absolute inset-0" onClick={handleClose} />

      <div
        className="relative z-[121] max-h-[90vh] w-[920px] max-w-[calc(100vw-32px)] overflow-hidden rounded-2xl bg-white shadow-2xl"
        dir="rtl"
      >
        <div className="flex items-center justify-between border-b border-[#e0e0e2] px-5 py-4">
          <h2 className="text-[17px] font-[iranb] text-[#23254e]">
            مدیریت اسلایدهای شگفت انگیز
          </h2>

          <button
            type="button"
            onClick={handleClose}
            className="flex h-8 w-8 items-center justify-center text-[26px] text-[#424750]"
          >
            ×
          </button>
        </div>

        <div className="max-h-[calc(90vh-65px)] overflow-y-auto px-5 py-4">
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 rounded-xl border border-[#f0f0f1] bg-[#fafafa] p-4 md:grid-cols-2 lg:grid-cols-5"
          >
            <input
              name="img"
              value={form.img}
              onChange={handleChange}
              placeholder="آدرس عکس"
              className="h-11 rounded-lg border border-[#e0e0e2] bg-white px-3 text-[12px] outline-none focus:border-[#19bfd3]"
            />

            <input
              name="text"
              value={form.text}
              onChange={handleChange}
              placeholder="عنوان محصول"
              className="h-11 rounded-lg border border-[#e0e0e2] bg-white px-3 text-[12px] outline-none focus:border-[#19bfd3]"
            />

            <input
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="قیمت"
              className="h-11 rounded-lg border border-[#e0e0e2] bg-white px-3 text-[12px] outline-none focus:border-[#19bfd3]"
            />

            <input
              name="pureprice"
              value={form.pureprice}
              onChange={handleChange}
              placeholder="قیمت قبل"
              className="h-11 rounded-lg border border-[#e0e0e2] bg-white px-3 text-[12px] outline-none focus:border-[#19bfd3]"
            />

            <input
              name="percentage"
              value={form.percentage}
              onChange={handleChange}
              placeholder="درصد تخفیف"
              className="h-11 rounded-lg border border-[#e0e0e2] bg-white px-3 text-[12px] outline-none focus:border-[#19bfd3]"
            />

            <button
              type="submit"
              className="h-11 rounded-lg bg-[#ef4056] text-[14px] font-[iranb] text-white md:col-span-2 lg:col-span-4"
            >
              {editId ? "ویرایش اسلاید" : "افزودن اسلاید"}
            </button>

            <button
              type="button"
              onClick={resetForm}
              className="h-11 rounded-lg border border-[#e0e0e2] text-[13px] text-[#62666d]"
            >
              پاک کردن فرم
            </button>
          </form>

          {loading && (
            <p className="py-6 text-center text-[13px] text-[#62666d]">
              در حال بارگذاری...
            </p>
          )}

          {error && (
            <p className="py-6 text-center text-[13px] text-[#ef4056]">
              {error}
            </p>
          )}

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {amazing?.roll?.map((item) => (
              <div
                key={item.id}
                className="rounded-xl border border-[#f0f0f1] bg-white p-3"
              >
                <img
                  src={item.img}
                  alt=""
                  className="h-[130px] w-full object-contain"
                />

                <p className="mt-2 h-[40px] overflow-hidden text-[12px] leading-5 text-[#3f4064]">
                  {item.text}
                </p>

                <div className="mt-3 flex items-center justify-between text-[12px]">
                  <span className="font-[iranb] text-[#23254e]">
                    {item.price}
                  </span>
                  <span className="rounded-full bg-[#ef4056] px-2 py-0.5 text-white">
                    {item.percentage}
                  </span>
                </div>

                <p className="mt-1 text-left text-[11px] text-gray-400 line-through">
                  {item.pureprice}
                </p>

                <div className="mt-3 flex gap-2">
                  <button
                    type="button"
                    onClick={() => handleEdit(item)}
                    className="flex-1 rounded-lg border border-[#19bfd3] py-2 text-[12px] text-[#19bfd3]"
                  >
                    ویرایش
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="flex-1 rounded-lg border border-[#ef4056] py-2 text-[12px] text-[#ef4056]"
                  >
                    حذف
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AmazingCrud;
