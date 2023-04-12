const express = require('express');
const router = express.Router();
const { collection, getDocs, addDoc, doc, deleteDoc, setDoc } = require("firebase/firestore"); 
const { db } = require('../../config/firebase');

// Lấy danh sách người dùng
router.get('/', async ( req, res ) => {

    try {
        let result = [];
        const querySnapshot = await getDocs(collection(db, 'user'));
        querySnapshot.forEach((doc) => {
            result.push({...doc.data(), id: doc.id})
        })
        res.json(result)
    } catch (error) {
        return res.json({ message: `Lỗi ${error}` })
    }

})

// Thêm 1 người dùng
router.post('/add', async (req, res) => {
    try {
        const user = req.body;

        await addDoc(collection(db,'user'), user);
        return res.status(200).json({ message: 'Thêm thành công' })
    } catch (error) {
        return res.status(404).json({message: `Error ${error}`})
    }
})

// Xóa 1 người dùng
router.delete('/delete', async (req, res) => {
    try {
        
        let {id} = req.body;
        await deleteDoc(doc(db, 'user', id));
        return res.status(200).json({ message: 'Xóa thành công' })

    } catch (error) {
        return res.status(404).json({ message: 'Error' });
    }
})


module.exports = router;