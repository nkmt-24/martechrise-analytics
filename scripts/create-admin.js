const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const path = require('path');
const dotenv = require('dotenv');

// Load environment variables
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

console.log("Loading env from:", envPath);
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "Defined" : "Not Defined");

const UserSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, select: false },
        role: { type: String, enum: ["user", "admin", "editor"], default: "user" },
        provider: { type: String, default: "credentials" },
    },
    { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserSchema);

async function createAdmin() {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
        console.error("❌ MONGODB_URI is not defined in .env");
        console.log("Please ensure .env exists and contains MONGODB_URI");
        process.exit(1);
    }

    try {
        await mongoose.connect(MONGODB_URI);
        console.log("✅ Connected to MongoDB");

        const adminEmail = "admin@example.com";
        const existingAdmin = await User.findOne({ email: adminEmail });

        if (existingAdmin) {
            console.log("⚠️ Admin user already exists");
            console.log("Updated role to admin just in case");
            existingAdmin.role = "admin";
            await existingAdmin.save();
        } else {
            const hashedPassword = await bcrypt.hash("admin123", 10);
            const adminUser = new User({
                name: "Super Admin",
                email: adminEmail,
                password: hashedPassword,
                role: "admin",
                provider: "credentials",
            });

            await adminUser.save();
            console.log("✅ Admin user created successfully");
        }

        console.log("📧 Email: admin@example.com");
        console.log("🔑 Password: admin123");

    } catch (error) {
        console.error("❌ Error creating admin user:", error);
        process.exit(1);
    } finally {
        await mongoose.disconnect();
        console.log("🔌 Disconnected from MongoDB");
    }
}

createAdmin();
