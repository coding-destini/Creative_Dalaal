    import { useState } from "react";
    import { useDispatch } from 'react-redux';
    import { addUser } from "../../../feature/UserSlicer";

    const Form = ({setOpen}) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [joinDate, setJoinDate] = useState(null);
    const [earnings, setEarnings] = useState('');
    const [status, setStatus] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = { name, email,  joinDate: joinDate ? formatDate(joinDate) : '', earnings, status };
        // hit to the slicer's reducer
        dispatch(addUser(newUser));
        // Reset form fields
        setName('');
        setEmail('');
        setJoinDate('');
        setEarnings('');
        setStatus('');
        setOpen(false)
    };

    // Date format fun 
    const formatDate = (dateString) => {
        const options = { month: 'short', day: 'numeric', year: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    return (
        <div className="w-full bg-white rounded px-8 py-6">
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
                type="date"
                placeholder="Join Date"
                value={joinDate}
                onChange={(e) => setJoinDate(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <input
                type="text"
                placeholder="Earnings"
                value={earnings}
                onChange={(e) => setEarnings(e.target.value)}
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
            <div className="relative">
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                    className="block appearance-none w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                >
                    <option value="">Select Status</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Approved">Approved</option>
                    <option value="Declined">Declined</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 12a1 1 0 0 1-.7-.29l-3-3a1 1 0 1 1 1.4-1.42L10 10.59l2.3-2.3a1 1 0 1 1 1.4 1.42l-3 3a1 1 0 0 1-.7.29z"/></svg>
                </div>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200">Add User</button>
        </form>
    </div>

    )
    }

    export default Form