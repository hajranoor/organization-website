import React, {useState , useRef} from 'react'

import './addTeam.css'

function AddTeam() {
    const [name, setName]  =useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState(null)
    const [status, setStatus] = useState(null)
    const fileInputRef = useRef(null)

    const handleImageChange = (e) => {
        // setImage(e.target.files[0])

        const file = e.target.files[0]

        if (file && (file.type === 'image/jpeg' || file.type === 'image/png')) {
            setImage(file);
        }
        else {
            window.alert('Please upload a valid image file {jpg or png)');
            setImage(null);
            fileInputRef.current.value = ''; // Reset the file input

        }

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name' , name);
        formData.append('role' , role);
        formData.append('image' , image);

        try {
            const response = await fetch('http://localhost:3001/team/addMember' , {
                method: 'POST',
                body: formData,
            });
            setStatus(response.status);

            if (response.ok) {
                console.log("Member added succesfully");
            }
            else {
                const errorData = await response.json()
                console.error(errorData.message);
            }
        }
        catch (error) {
            console.error('Error in submitting data' , error);
        }
    };

    return (
        <div className = "add-team-container">
            <h1>Add Team Member</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div>
                    <label>Role:</label>
                    <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
                </div>
                <div>
                    <label>Image:</label>
                    <input type="file" accept="image/jpeg , image/png" onChange={handleImageChange}  ref = {fileInputRef} required />
                </div>
                <button type="submit">Add Member</button>
            </form>
            {status && <p>Status Code: {status}</p>}


        </div>
    )

}

export default AddTeam;