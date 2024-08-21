import React, { useState } from 'react';
import '../App.css'; 
const formatDate = (date) => date.toISOString().split('T')[0];

const CouponCode = () => {
    const [couponCode, setCouponCode] = useState('');
    const [type, setType] = useState('percentage');
    const [discount, setDiscount] = useState('');
    const [duration, setDuration] = useState('forever');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [amount, setAmount] = useState('');
    const [discountAmount, setDiscountAmount] = useState('');
    const [totalPrice, setTotalPrice] = useState('');
    const [coupon, setCoupon] = useState({}); 
    const [isCodeGenerated, setIsCodeGenerated] = useState(false);

    const handle_Discount = () => {
        const amountValue = parseFloat(amount);
        const discountValue = parseFloat(discount);
        if (isNaN(amountValue) && isNaN(discountValue)) return;

        const typeAmount = type === 'percentage'
            ? (amountValue * discountValue) / 100
            : discountValue;

        setDiscountAmount(typeAmount.toFixed(2));
        setTotalPrice((amountValue - typeAmount).toFixed(2));
    };

    const generateCode = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';
        for (let i = 0; i < 10; i++) {
            code += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return code;
    };

    const handle_Submit = (e) => {
        e.preventDefault();

        const today = new Date();
        const oneWeek = new Date();
        oneWeek.setDate(today.getDate() - 7);
        today.setDate(today.getDate())
    

        const dateStart = formatDate(new Date(startDate));
        const dateEnd = formatDate(new Date(endDate));
        const todayDate = formatDate(today);
        const lastOneWeek = formatDate(oneWeek);
        
        if(dateStart === lastOneWeek || dateEnd === lastOneWeek) {
            
        }else {

    if (dateStart <= lastOneWeek) {
        alert('Start date must be within the last week.');
        
    }
    if (dateEnd > todayDate) {
        alert('End date cannot be in the past.');
        
    }
}


        handle_Discount();

        if (!isCodeGenerated) {
            const changeCouponCode = generateCode();
            setCouponCode(changeCouponCode);
            setIsCodeGenerated(true);
        }

        const couponList = {
            couponCode: couponCode,
            type,
            discount,
            duration,
            startDate,
            endDate,
            amount,
            discountAmount,
            totalPrice,
        };

        setCoupon(couponList);
    };

    return (
        <>
            <form onSubmit={handle_Submit} className="coupon-form">
                
            <div className="group">
                    <label>Material Amount</label>
                    <input
                        type="text"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter Amount"
                        required
                    />
                </div>

                
                <div className="group">
                    <label>Discount</label>
                    <input
                        type="text"
                        value={discount}
                        onChange={(e) => setDiscount(e.target.value)}
                        placeholder='Discount'
                        required
                    />
                </div>

                <div className="group">
                    <label>Type</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                value="percentage"
                                checked={type === 'percentage'}
                                onChange={(e) => setType(e.target.value)}
                            />
                            Percentage
                        </label>
                        <label className='side-row'>
                            <input
                                type="radio"
                                value="flat"
                                checked={type === 'flat'}
                                onChange={(e) => setType(e.target.value)}
                            />
                            Flat
                        </label>
                    </div>
                </div>

                <div className="group">
                    <label>Duration</label>
                    <select
                        value={duration}
                        onChange={(e) => setDuration(e.target.value)}
                    >
                        <option value="forever">Forever</option>
                        <option value="once">Once</option>
                    </select>
                </div>

                <div className="group">
                    <label>Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                    />
                </div>

                <div className="group">
                    <label>End Date</label>
                    <input
                        type="date"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                    />
                </div>

                <div className="group">
                    <label>Coupon Code</label>
                    <input 
                        type="text" 
                        value={couponCode}
                        readOnly
                        placeholder="Coupon Code" 
                    />
                </div>

                <div className="group">
                    <label>Discount Amount</label>
                    <input
                        type="text"
                        value={discountAmount}
                        placeholder='Discount Amount'
                        readOnly
                    />
                </div>

                <div className="group">
                    <label>Total Price</label>
                    <input
                        type="text"
                        value={totalPrice}
                        placeholder='Total Price'
                        readOnly
                    />
                </div>
                <br />
                <button type="submit">Save</button>
                {/* <button type="button" onClick={handle_Reset}>Reset</button> */}
            </form>
            <br />
            <br />
            <div className='coupon-form'> 
                <div className="coupon-list">
                    <h2>Coupon List</h2>
                    <p>Coupon Code:<span className='coupon-value'> {coupon.couponCode}</span> </p>
                    <p>Type:  <span className='coupon-value'>{coupon.type}</span></p>
                    <p>Discount:  <span className='coupon-value'>{coupon.discount}</span></p> 
                    <p>Duration:  <span className='coupon-value'>{coupon.duration}</span></p>
                    <p>Start Date:  <span className='coupon-value'>{coupon.startDate}</span></p>
                    <p>End Date:  <span className='coupon-value'>{coupon.endDate}</span></p>
                    <p>Material Amount:  <span className='coupon-value'>{coupon.amount}</span></p>
                    <p>Discount Amount: <span className='coupon-value'>{coupon.discountAmount}</span></p>
                    <p>Total Price: <span className='coupon-value'>{coupon.totalPrice}</span></p>
                </div>
            </div>
        </>
    );
};

export default CouponCode ;
