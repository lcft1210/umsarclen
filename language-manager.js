// language-manager.js
class LanguageManager {
    constructor() {
        this.currentLanguage = this.getSavedLanguage() || 'en';
        this.translations = {
            en: {
                common: {
                    login: 'Login',
                    logout: 'Logout',
                    back: 'Back',
                    submit: 'Submit',
                    cancel: 'Cancel',
                    save: 'Save',
                    edit: 'Edit',
                    delete: 'Delete',
                    close: 'Close',
                    loading: 'Loading...',
                    error: 'Error',
                    success: 'Success',
                    urgent: 'URGENT',
                },
                
                mainPage: {
                    title: 'UMS ARCLEN',
                    subtitle: 'YOUR ALL-IN-ONE STUDENT SERVICES HUB',
                    services: {
                        noticeBoard: 'Notice Board',
                        itel: 'ITEL',
                        smpb: 'SMPB',
                        service: 'Service',
                        organisation: 'Organisation',
                        emergency: 'Emergency Contact',
                    },
                },
                
                login: {
                    title: 'Login | UMS Arclen',
                    welcomeBack: 'Welcome Back',
                    description: 'Login with your BI/BG student ID',
                    studentId: 'Student ID',
                    password: 'Password',
                    loginButton: 'Login',
                    noAccount: "Don't have an account?",
                    register: 'Register',
                    invalidCredentials: 'Invalid credentials. Make sure your Student ID starts with BI or BG and password is correct.',
                    studentIdPlaceholder: 'BI21110234',
                },
                
                register: {
                    createAccount: 'Create an account',
                    description: 'Use your BI/BG student ID to register.',
                    fullName: 'Full Name',
                    studentId: 'Student ID',
                    phone: 'Phone Number',
                    email: 'Email',
                    password: 'Password',
                    confirmPassword: 'Confirm Password',
                    registerButton: 'Register',
                    passwordMismatch: 'Passwords do not match',
                    registrationFailed: 'Registration failed',
                    fullNamePlaceholder: 'Full name',
                    studentIdPlaceholder: 'ID Pelajar (BI... / BG...)',
                    phonePlaceholder: 'Phone number',
                    emailPlaceholder: 'Email',
                    passwordPlaceholder: 'Password',
                    confirmPasswordPlaceholder: 'Confirm password',
                    invalidStudentId: 'Student ID must start with BI or BG',
                    studentIdExists: 'Student ID already registered',
                    emailExists: 'Email already registered',
                },
                
                profile: {
                    title: 'Student Profile',
                    personalInfo: 'Personal Information',
                    academicInfo: 'Academic Information',
                    contactInfo: 'Contact Information',
                    additionalInfo: 'Additional Information',
                    noData: 'No user data found.',
                    pleaseLogin: 'Please log in.',
                    
                    fields: {
                        fullName: 'Full Name',
                        studentId: 'Student ID',
                        email: 'Email',
                        phone: 'Phone',
                        dateOfBirth: 'Date of Birth',
                        gender: 'Gender',
                        nationality: 'Nationality',
                        address: 'Address',
                        city: 'City',
                        state: 'State',
                        postcode: 'Postcode',
                        country: 'Country',
                        program: 'Program',
                        faculty: 'Faculty',
                        yearOfStudy: 'Year of Study',
                        cgpa: 'CGPA',
                        semester: 'Current Semester',
                        enrollmentYear: 'Enrollment Year',
                        expectedGraduation: 'Expected Graduation',
                        advisor: 'Academic Advisor',
                        emergencyContact: 'Emergency Contact',
                        emergencyPhone: 'Emergency Phone',
                        bloodType: 'Blood Type',
                        allergies: 'Allergies',
                        medicalConditions: 'Medical Conditions',
                        hobbies: 'Hobbies',
                        clubs: 'Clubs & Organizations',
                        skills: 'Skills',
                    },
                },
                
                noticeBoard: {
                    title: 'Notice Board',
                    addNotice: 'Add Notice',
                    noticeTitle: 'Notice Title',
                    noticeContent: 'Notice Content',
                    category: 'Category',
                    noNotices: 'No notices yet. Add your first notice!',
                    categories: {
                        announcement: 'Announcement',
                        event: 'Event',
                        academic: 'Academic',
                        general: 'General',
                    },
                },
                
                servicePage: {
                    title: 'Student Services',
                    subtitle: 'Access various student support services',
                    choose: 'Choose the service you need',
                    peerToPeer: 'Peer-to-peer department contact',
                    services: {
                        counseling: 'Counseling',
                        itSupport: 'IT Support',
                        financialAid: 'Financial Aid',
                        carRental: 'Car Rental',
                        tutoring: 'Tutoring',
                        careerService: 'Career Service',
                    },
                    descriptions: {
                        counseling: 'Mental health and personal counseling services',
                        itSupport: 'Technical support for students',
                        financialAid: 'Financial assistance and scholarships',
                        carRental: 'Campus car rental services',
                        tutoring: 'Academic tutoring and peer support',
                        careerService: 'Career guidance and job placement',
                    },
                },
                
                serviceDetail: {
                    backToServices: 'Back to Services',
                    contactInfo: 'Contact Information',
                    availableHours: 'Available Hours',
                    location: 'Location',
                    email: 'Email',
                    phone: 'Phone',
                    website: 'Website',
                    
                    counseling: {
                        title: 'Counseling Services',
                        bookTitle: 'Book Your Counseling Session',
                        description: 'Professional counseling support for mental health, personal development, and academic challenges.',
                        services: [
                            'Individual counseling sessions',
                            'Group therapy and workshops',
                            'Crisis intervention',
                            'Stress management programs',
                            'Academic counseling',
                            'Career counseling',
                        ],
                        hours: 'Monday - Friday: 9:00 AM - 5:00 PM',
                    },
                    
                    itSupport: {
                        title: 'IT Support Services',
                        description: 'Technical assistance for all your computing and network needs on campus.',
                        services: [
                            'Email and account setup',
                            'WiFi connectivity support',
                            'Software installation guidance',
                            'Hardware troubleshooting',
                            'Learning management system support',
                            'Online portal assistance',
                        ],
                        hours: 'Monday - Friday: 8:00 AM - 6:00 PM',
                    },
                    
                    financialAid: {
                        title: 'Financial Aid Services',
                        description: 'Comprehensive financial support and scholarship information for students.',
                        services: [
                            'Scholarship applications',
                            'Student loan guidance',
                            'Financial planning assistance',
                            'Emergency financial aid',
                            'Work-study programs',
                            'Grant applications',
                        ],
                        hours: 'Monday - Friday: 9:00 AM - 4:00 PM',
                    },
                    
                    carRental: {
                        title: 'Car Rental Services',
                        intro: 'Convenient car rental services near UMS campuses',
                        notes: {
                            title: 'Important Notes:',
                            1: 'Always verify rental terms and conditions before booking',
                            2: 'Ensure you have a valid driving license',
                            3: 'Check insurance coverage included in the rental',
                            4: 'Book in advance during peak seasons and holidays',
                            5: 'UMS is not affiliated with these rental services'
                        },
                        branches: {
                            kk: 'UMS Kota Kinabalu',
                            labuan: 'UMS Labuan International Campus',
                            sandakan: 'UMS Sandakan Branch Campus'
                        },
                        companies: {
                            grendline: 'Grendline Travel Car Rental Services',
                            mj: 'MJ Car Rental',
                            carii: 'Carii',
                            threeguys: '3guys Car Rental',
                            mkaz: 'MKAZ Car Rental'
                        }
                    },
                    
                    tutoring: {
                        title: 'Tutoring Appointment',
                        form: {
                            title: 'Book Your Study Session',
                            subject: 'Subject',
                            selectSubject: 'Select subject',
                            lecturer: 'Lecturer',
                            selectLecturer: 'Choose a lecturer',
                            topic: 'Topic / Area of Focus',
                            topicPlaceholder: 'e.g., Calculus - Integration techniques'
                        },
                        subjects: {
                            mathematics: 'Mathematics',
                            computerScience: 'Computer Science',
                            physics: 'Physics',
                            chemistry: 'Chemistry',
                            biology: 'Biology',
                            engineering: 'Engineering'
                        },
                        confirmation: {
                            title: 'Appointment Confirmed!'
                        },
                        buttons: {
                            createGroup: 'Create Study Group',
                            backToForm: 'Back to Form'
                        },
                        studyGroup: {
                            title: 'Study Group Created!',
                            share: 'Share this link with other students:',
                            description: 'Students can join your study group using this link. Group is open until session time.',
                            host: '👤 You (Host)',
                            waiting: 'Waiting for students...',
                            copied: 'Study group link copied!'
                        },
                        notice: {
                            title: 'Your tutoring session',
                            scheduled: 'is scheduled on',
                            at: 'at',
                            emailSent: 'A confirmation email has been sent to'
                        }
                    },
                    
                    careerService: {
                        title: 'Career Services',
                        description: 'Professional career guidance and job placement support for students and graduates.',
                        services: [
                            'Career counseling',
                            'Resume and CV writing',
                            'Interview preparation',
                            'Job search strategies',
                            'Internship placement',
                            'Career fairs and networking events',
                        ],
                        hours: 'Monday - Friday: 9:00 AM - 5:00 PM',
                    },
                },
                
                counseling: {
                    issueType: 'Type of Issue',
                    selectIssue: 'Select an issue',
                    issues: {
                        academic: 'Academic Stress',
                        personal: 'Personal Issues',
                        relationship: 'Relationship Problems',
                        anxiety: 'Anxiety & Depression',
                        career: 'Career Guidance',
                        family: 'Family Issues',
                        others: 'Others'
                    },
                    branch: 'Branch',
                    selectBranch: 'Select a branch',
                    branches: {
                        kk: 'UMS Kota Kinabalu',
                        labuan: 'UMS Labuan International Campus',
                        sandakan: 'UMS Sandakan Branch Campus'
                    },
                    date: 'Date',
                    time: 'Time',
                    confirmation: 'Appointment Confirmed!',
                    notice: {
                        main: 'Please check your email for confirmation.',
                        sub: 'You can reschedule or cancel 24 hours before the appointment.'
                    }
                },
                
                itSupport: {
                    contact: '24/7 IT Help Desk: +60 88-329 000 | digital@ums.edu.my',
                    help: {
                        title: 'Still Need Help?',
                        description: 'Visit our IT Help Desk or submit a support ticket online',
                        email: 'Email IT Support',
                        call: 'Call Help Desk'
                    },
                    faqs: {
                        wifi: {
                            title: 'Wi-Fi / Network Login Issues',
                            content: '1. Connect to "UMS-Student" WiFi\n2. Open browser and navigate to wifi.ums.edu.my\n3. Enter your Student ID and password\n4. If issues persist, contact IT Help Desk at +60 88-329 000'
                        },
                        portal: {
                            title: 'Student Portal Login Problems',
                            content: '1. Go to portal.ums.edu.my\n2. Use your Student ID as username\n3. Default password is your IC number (without dashes)\n4. Clear browser cache if page doesn\'t load\n5. Contact portal@ums.edu.my for assistance'
                        },
                        password: {
                            title: 'Password Reset / Account Recovery',
                            content: '1. Visit portal.ums.edu.my/reset\n2. Enter your Student ID and registered email\n3. Check your email for reset link\n4. Or visit IT Help Desk with your student card\n5. Location: IT Department, Ground Floor, Administration Building'
                        },
                        email: {
                            title: 'Email Setup (Student Email)',
                            content: 'Your UMS email: studentName&Batch@iluv.ums.edu.my\n\nSetup Instructions:\n1. Go to outlook.office.com\n2. Login with full email address\n3. Password: Same as portal password\n4. Enable 2FA for security\n\nMobile Setup:\n- Download Microsoft Outlook app\n- Add account with your credentials'
                        },
                        software: {
                            title: 'Software Installation (Microsoft 365, Antivirus, etc.)',
                            content: 'Free Software for UMS Students:\n\n1. Microsoft 365:\n- Visit office.com/signin\n- Login with UMS email\n- Download Office apps\n\n2. Antivirus (Windows Defender):\n- Pre-installed on Windows\n- Or download from software.ums.edu.my\n\n3. Other Software:\n- Visit it.ums.edu.my/downloads\n- Login with student credentials'
                        },
                        device: {
                            title: 'Device Troubleshooting (laptop/phone)',
                            content: 'Common Issues:\n\n1. Slow Computer:\n- Clear temp files\n- Disable startup programs\n- Run antivirus scan\n\n2. Cannot Connect to Campus WiFi:\n- Forget network and reconnect\n- Update device drivers\n- Check if MAC address is registered\n\n3. Need Help?\n- IT Clinic: Every Monday & Wednesday, 2-4 PM\n- Location: IT Lab, Block A'
                        },
                        printing: {
                            title: 'Printing System Issues',
                            content: '1. Add printer:\n- Go to print.ums.edu.my\n- Download printer driver\n- Install and connect\n\n2. Print Credits:\n- Top up at library counter\n- Or online at portal.ums.edu.my/print\n\n3. Print Locations:\n- Library (All floors)\n- Computer Labs\n- Student Center\n\n4. Issues? Contact: print@ums.edu.my'
                        },
                        lms: {
                            title: 'Online Class / LMS Problems (Google Classroom, Moodle, etc.)',
                            content: 'Learning Management Systems:\n\n1. UMS Moodle:\n- URL: itel.ums.edu.my\n- Login with student credentials\n- Contact: +60 883 200 00\n\n2. Google Classroom:\n- Use UMS email to join classes\n- Install Google Meet app\n\n3. Webex:\n- Free for students via portal\n- Download at webex.com\n\n4. Cannot access class materials?\n- Clear browser cache\n- Try different browser\n- Contact lecturer or digital@ums.edu.my'
                        }
                    }
                },
                
                financialAid: {
                    contact: 'Financial Aid Office: +60 88-320 000 | student-finance@ums.edu.my',
                    apply: {
                        title: 'How to Apply?',
                        description: 'Visit the Financial Aid Office or apply online through the student portal',
                        online: 'Apply Online',
                        contact: 'Contact Financial Aid Office'
                    },
                    labels: {
                        amount: 'Amount',
                        eligibility: 'Eligibility',
                        contact: 'Contact',
                        workload: 'Workload',
                        duration: 'Duration',
                        coverage: 'Coverage'
                    },
                    sections: {
                        scholarships: {
                            title: 'Scholarships',
                            items: {
                                excellence: {
                                    name: 'UMS Excellence Scholarship',
                                    description: 'For students with CGPA 3.75 and above'
                                },
                                deans: {
                                    name: 'Dean\'s List Scholarship',
                                    description: 'For Dean\'s List achievers'
                                },
                                sports: {
                                    name: 'Sports Excellence Scholarship',
                                    description: 'For state/national level athletes'
                                },
                                needBased: {
                                    name: 'Need-Based Financial Aid',
                                    description: 'For students from low-income families'
                                },
                                ptps: {
                                    name: 'PTPS Education Support',
                                    description: 'State government financial assistance for Sabah students'
                                },
                                jpa: {
                                    name: 'JPA PBU Scholarship',
                                    description: 'Federal scholarship for study in local universities'
                                }
                            }
                        },
                        loans: {
                            title: 'Student Loans',
                            items: {
                                ptptn: {
                                    name: 'PTPTN',
                                    description: 'Government education loan scheme'
                                },
                                mara: {
                                    name: 'MARA Education Loan',
                                    description: 'For Bumiputera students'
                                },
                                bank: {
                                    name: 'Bank Education Loan',
                                    description: 'Private bank education financing'
                                }
                            }
                        },
                        workStudy: {
                            title: 'Work-Study Programs',
                            items: {
                                assistant: {
                                    name: 'Student Assistant',
                                    description: 'Part-time work in departments'
                                },
                                library: {
                                    name: 'Library Assistant',
                                    description: 'Help manage library operations'
                                },
                                lab: {
                                    name: 'Lab Assistant',
                                    description: 'Assist in computer/science labs'
                                },
                                research: {
                                    name: 'Research Assistant',
                                    description: 'Assist lecturers in research projects'
                                },
                                customerService: {
                                    name: 'Online Customer Service',
                                    description: 'Support student inquiries online'
                                }
                            }
                        },
                        exchange: {
                            title: 'Mobility Exchange Program',
                            items: {
                                erasmus: {
                                    name: 'Erasmus+',
                                    description: 'Study in Europe'
                                },
                                aims: {
                                    name: 'ASEAN International Mobility for Students (AIMS)',
                                    description: 'Exchange within ASEAN countries'
                                },
                                commonwealth: {
                                    name: 'Commonwealth Scholarship',
                                    description: 'Study in UK, Australia, Canada'
                                },
                                jasso: {
                                    name: 'Japan Student Services Organization (JASSO)',
                                    description: 'Short-term exchange to Japan'
                                }
                            }
                        }
                    }
                },
                
                itel: {
                    title: 'ITEL Portal',
                    description: 'Access the International and External Links portal',
                    loading: 'Loading ITEL portal...',
                },
                
                smpb: {
                    title: 'SMPB Portal',
                    description: 'Student Management and Performance Board',
                    loading: 'Loading SMPB portal...',
                },
                
                organisation: {
                    title: 'Organisation Directory',
                    description: 'University organisations, councils, clubs and societies.',
                    categories: {
                        branches: 'UMS Branches',
                        studentCouncil: 'Student Council',
                        clubs: 'Clubs',
                        societies: 'Societies',
                    },
                    items: {
                        // Branches
                        umsKK: 'UMS Kota Kinabalu Campus',
                        umsLabuan: 'UMS Labuan International Campus',
                        umsSandakan: 'UMS Sandakan Branch Campus',
                        
                        // Student Council
                        presidentKK: 'Student Council President (KK)',
                        vpKK: 'Vice President (KK)',
                        secretaryKK: 'Secretary (KK)',
                        repLabuan: 'Student Representative (Labuan)',
                        repSandakan: 'Student Representative (Sandakan)',
                        
                        // Clubs
                        photoClub: 'Photography Club',
                        debateSociety: 'Debate Society',
                        musicClub: 'Music Club',
                        sportsClub: 'Sports Club',
                        marineClub: 'Marine Biology Club (Labuan)',
                        wildlifeClub: 'Wildlife Club (Sandakan)',
                        
                        // Societies
                        csSociety: 'Computer Science Society',
                        engSociety: 'Engineering Society',
                        bizSociety: 'Business Society',
                        scienceSociety: 'Science Society',
                        intlBizSociety: 'International Business Society (Labuan)',
                        marineScienceSociety: 'Marine Science Society (Sandakan)',
                    },
                },

                emergency: {
                    title: 'Emergency Contacts',
                    description: 'Reach out to the appropriate emergency service immediately if needed.',
                    hotline: 'Emergency Hotlines: 999 (Police/Ambulance) | 994 (Fire)',
                    importantReminders: 'Important Reminders:',
                    reminder1: '• In case of life-threatening emergency, call 999 immediately',
                    reminder2: '• For campus emergencies after hours, contact Campus Security',
                    reminder3: '• Keep these numbers saved in your phone',
                    reminder4: '• Stay calm and provide clear information',
                    reminder5: '• Know your exact location',
                    university: 'University Services',
                    medical: 'Medical Emergency',
                    security: 'Campus Security',
                    fire: 'Fire Department',
                    police: 'Police',
                    ambulance: 'Ambulance',
                    campusSecurity: 'Campus Security Office',
                    healthCenter: 'Campus Health Center',
                    mainOffice: 'Main Office',
                    hospital: 'Hospital',
                    policeStation: 'Police Station',
                    trafficPolice: 'Traffic Police',
                    fireDepartment: 'Fire Department',
                    available24: 'Available 24/7'
                },
                
                // NEW: Peer-to-Peer Department Contact translations
                peerToPeer: {
                    intro: {
                        title: 'What is Peer-to-Peer Department Contact?',
                        description: 'A direct pathway to connect with student representatives, faculty heads, academic advisors, and administrative staff. Get the support and guidance you need from the right people.'
                    },
                    assistance: {
                        title: 'Need General Assistance?',
                        description: 'Contact the Student Affairs Office for general inquiries',
                        call: '📞 +60 88-320 000',
                        email: '✉️ Email Us'
                    },
                    departments: {
                        studentCouncil: {
                            title: 'Student Council',
                            description: 'Your voice in university matters'
                        },
                        facultyReps: {
                            title: 'Faculty Representatives', 
                            description: 'Direct contact with faculty heads'
                        },
                        campusAdmin: {
                            title: 'Campus Administration',
                            description: 'Administrative and operational contacts'
                        },
                        academicAdvisors: {
                            title: 'Academic Advisors',
                            description: 'Get guidance on academic matters'
                        },
                        studentWelfare: {
                            title: 'Student Welfare Representatives',
                            description: 'Support for student welfare and wellbeing'
                        },
                        branchCampuses: {
                            title: 'Branch Campus Contacts',
                            description: 'Representatives from all UMS branches'
                        }
                    },
                    common: {
                        call: '📞 Call',
                        whatsapp: 'WhatsApp'
                    }
                }
            },
            
            ms: {
                common: {
                    login: 'Log Masuk',
                    logout: 'Log Keluar',
                    back: 'Kembali',
                    submit: 'Hantar',
                    cancel: 'Batal',
                    save: 'Simpan',
                    edit: 'Edit',
                    delete: 'Padam',
                    close: 'Tutup',
                    loading: 'Memuatkan...',
                    error: 'Ralat',
                    success: 'Berjaya',
                    urgent: 'SEGERA',
                },
                
                mainPage: {
                    title: 'UMS ARCLEN',
                    subtitle: 'PUSAT PERKHIDMATAN PELAJAR SERBA ADA',
                    services: {
                        noticeBoard: 'Papan Notis',
                        itel: 'ITEL',
                        smpb: 'SMPB',
                        service: 'Perkhidmatan',
                        organisation: 'Organisasi',
                        emergency: 'Hubungan Kecemasan',
                    },
                },
                
                login: {
                    title: 'Log Masuk | UMS Arclen',
                    welcomeBack: 'Selamat Kembali',
                    description: 'Log masuk dengan ID pelajar BI/BG anda',
                    studentId: 'ID Pelajar',
                    password: 'Kata Laluan',
                    loginButton: 'Log Masuk',
                    noAccount: 'Tidak mempunyai akaun?',
                    register: 'Daftar',
                    invalidCredentials: 'Kelayakan tidak sah. Pastikan ID Pelajar anda bermula dengan BI atau BG dan kata laluan betul.',
                    studentIdPlaceholder: 'BI21110234',
                },
                
                register: {
                    createAccount: 'Cipta akaun',
                    description: 'Gunakan ID pelajar BI/BG anda untuk mendaftar.',
                    fullName: 'Nama Penuh',
                    studentId: 'ID Pelajar',
                    phone: 'Nombor Telefon',
                    email: 'E-mel',
                    password: 'Kata Laluan',
                    confirmPassword: 'Sahkan Kata Laluan',
                    registerButton: 'Daftar',
                    passwordMismatch: 'Kata laluan tidak sepadan',
                    registrationFailed: 'Pendaftaran gagal',
                    fullNamePlaceholder: 'Nama penuh',
                    studentIdPlaceholder: 'ID Pelajar (BI... / BG...)',
                    phonePlaceholder: 'Nombor telefon',
                    emailPlaceholder: 'E-mel',
                    passwordPlaceholder: 'Kata laluan',
                    confirmPasswordPlaceholder: 'Sahkan kata laluan',
                    invalidStudentId: 'ID Pelajar mesti bermula dengan BI atau BG',
                    studentIdExists: 'ID Pelajar sudah didaftarkan',
                    emailExists: 'E-mel sudah didaftarkan',
                },
                
                profile: {
                    title: 'Profil Pelajar',
                    personalInfo: 'Maklumat Peribadi',
                    academicInfo: 'Maklumat Akademik',
                    contactInfo: 'Maklumat Perhubungan',
                    additionalInfo: 'Maklumat Tambahan',
                    noData: 'Tiada data pengguna dijumpai.',
                    pleaseLogin: 'Sila log masuk.',
                    
                    fields: {
                        fullName: 'Nama Penuh',
                        studentId: 'ID Pelajar',
                        email: 'E-mel',
                        phone: 'Telefon',
                        dateOfBirth: 'Tarikh Lahir',
                        gender: 'Jantina',
                        nationality: 'Kewarganegaraan',
                        address: 'Alamat',
                        city: 'Bandar',
                        state: 'Negeri',
                        postcode: 'Poskod',
                        country: 'Negara',
                        program: 'Program',
                        faculty: 'Fakulti',
                        yearOfStudy: 'Tahun Pengajian',
                        cgpa: 'PNGK',
                        semester: 'Semester Semasa',
                        enrollmentYear: 'Tahun Pendaftaran',
                        expectedGraduation: 'Jangkaan Graduasi',
                        advisor: 'Penasihat Akademik',
                        emergencyContact: 'Hubungan Kecemasan',
                        emergencyPhone: 'Telefon Kecemasan',
                        bloodType: 'Jenis Darah',
                        allergies: 'Alahan',
                        medicalConditions: 'Keadaan Perubatan',
                        hobbies: 'Hobi',
                        clubs: 'Kelab & Organisasi',
                        skills: 'Kemahiran',
                    },
                },
                
                noticeBoard: {
                    title: 'Papan Notis',
                    addNotice: 'Tambah Notis',
                    noticeTitle: 'Tajuk Notis',
                    noticeContent: 'Kandungan Notis',
                    category: 'Kategori',
                    noNotices: 'Tiada notis lagi. Tambah notis pertama anda!',
                    categories: {
                        announcement: 'Pengumuman',
                        event: 'Acara',
                        academic: 'Akademik',
                        general: 'Umum',
                    },
                },
                
                servicePage: {
                    title: 'Perkhidmatan Pelajar',
                    subtitle: 'Akses pelbagai perkhidmatan sokongan pelajar',
                    choose: 'Pilih perkhidmatan yang anda perlukan',
                    peerToPeer: 'Hubungan jabatan rakan ke rakan',
                    services: {
                        counseling: 'Kaunseling',
                        itSupport: 'Sokongan IT',
                        financialAid: 'Bantuan Kewangan',
                        carRental: 'Sewa Kereta',
                        tutoring: 'Tunjuk Ajar',
                        careerService: 'Perkhidmatan Kerjaya',
                    },
                    descriptions: {
                        counseling: 'Perkhidmatan kaunseling kesihatan mental dan peribadi',
                        itSupport: 'Sokongan teknikal untuk pelajar',
                        financialAid: 'Bantuan kewangan dan biasiswa',
                        carRental: 'Perkhidmatan sewa kereta kampus',
                        tutoring: 'Tunjuk ajar akademik dan sokongan rakan sebaya',
                        careerService: 'Bimbingan kerjaya dan penempatan kerja',
                    },
                },
                
                serviceDetail: {
                    backToServices: 'Kembali ke Perkhidmatan',
                    contactInfo: 'Maklumat Hubungan',
                    availableHours: 'Waktu Beroperasi',
                    location: 'Lokasi',
                    email: 'E-mel',
                    phone: 'Telefon',
                    website: 'Laman Web',
                    
                    counseling: {
                        title: 'Perkhidmatan Kaunseling',
                        bookTitle: 'Tempah Sesi Kaunseling Anda',
                        description: 'Sokongan kaunseling profesional untuk kesihatan mental, pembangunan peribadi, dan cabaran akademik.',
                        services: [
                            'Sesi kaunseling individu',
                            'Terapi kumpulan dan bengkel',
                            'Campur tangan krisis',
                            'Program pengurusan stres',
                            'Kaunseling akademik',
                            'Kaunseling kerjaya',
                        ],
                        hours: 'Isnin - Jumaat: 9:00 Pagi - 5:00 Petang',
                    },
                    
                    itSupport: {
                        title: 'Perkhidmatan Sokongan IT',
                        description: 'Bantuan teknikal untuk semua keperluan pengkomputeran dan rangkaian di kampus.',
                        services: [
                            'Persediaan e-mel dan akaun',
                            'Sokongan sambungan WiFi',
                            'Panduan pemasangan perisian',
                            'Penyelesaian masalah perkakasan',
                            'Sokongan sistem pengurusan pembelajaran',
                            'Bantuan portal dalam talian',
                        ],
                        hours: 'Isnin - Jumaat: 8:00 Pagi - 6:00 Petang',
                    },
                    
                    financialAid: {
                        title: 'Perkhidmatan Bantuan Kewangan',
                        description: 'Sokongan kewangan komprehensif dan maklumat biasiswa untuk pelajar.',
                        services: [
                            'Permohonan biasiswa',
                            'Panduan pinjaman pelajar',
                            'Bantuan perancangan kewangan',
                            'Bantuan kewangan kecemasan',
                            'Program belajar sambil bekerja',
                            'Permohonan geran',
                        ],
                        hours: 'Isnin - Jumaat: 9:00 Pagi - 4:00 Petang',
                    },
                    
                    carRental: {
                        title: 'Perkhidmatan Sewa Kereta',
                        intro: 'Perkhidmatan sewa kereta yang mudah berhampiran kampus UMS',
                        notes: {
                            title: 'Nota Penting:',
                            1: 'Sentiasa sahkan terma dan syarat sewa sebelum membuat tempahan',
                            2: 'Pastikan anda mempunyai lesen memandu yang sah',
                            3: 'Periksa liputan insurans yang termasuk dalam sewaan',
                            4: 'Tempah lebih awal semasa musim puncak dan cuti',
                            5: 'UMS tidak berkaitan dengan perkhidmatan sewaan ini'
                        },
                        branches: {
                            kk: 'UMS Kota Kinabalu',
                            labuan: 'Kampus Antarabangsa UMS Labuan',
                            sandakan: 'Kampus Cawangan UMS Sandakan'
                        },
                        companies: {
                            grendline: 'Grendline Travel Perkhidmatan Sewa Kereta',
                            mj: 'MJ Sewa Kereta',
                            carii: 'Carii',
                            threeguys: '3guys Sewa Kereta',
                            mkaz: 'MKAZ Sewa Kereta'
                        }
                    },
                    
                    tutoring: {
                        title: 'Temujanji Tunjuk Ajar',
                        form: {
                            title: 'Tempah Sesi Belajar Anda',
                            subject: 'Subjek',
                            selectSubject: 'Pilih subjek',
                            lecturer: 'Pensyarah',
                            selectLecturer: 'Pilih pensyarah',
                            topic: 'Topik / Fokus Kawasan',
                            topicPlaceholder: 'cth., Kalkulus - Teknik pengamiran'
                        },
                        subjects: {
                            mathematics: 'Matematik',
                            computerScience: 'Sains Komputer',
                            physics: 'Fizik',
                            chemistry: 'Kimia',
                            biology: 'Biologi',
                            engineering: 'Kejuruteraan'
                        },
                        confirmation: {
                            title: 'Temujanji Disahkan!'
                        },
                        buttons: {
                            createGroup: 'Buat Kumpulan Belajar',
                            backToForm: 'Kembali ke Borang'
                        },
                        studyGroup: {
                            title: 'Kumpulan Belajar Dicipta!',
                            share: 'Kongsi pautan ini dengan pelajar lain:',
                            description: 'Pelajar boleh sertai kumpulan belajar anda menggunakan pautan ini. Kumpulan terbuka sehingga waktu sesi.',
                            host: '👤 Anda (Tuan Rumah)',
                            waiting: 'Menunggu pelajar...',
                            copied: 'Pautan kumpulan belajar disalin!'
                        },
                        notice: {
                            title: 'Sesi tunjuk ajar anda',
                            scheduled: 'dijadualkan pada',
                            at: 'pada',
                            emailSent: 'E-mel pengesahan telah dihantar ke'
                        }
                    },
                    
                    careerService: {
                        title: 'Perkhidmatan Kerjaya',
                        description: 'Bimbingan kerjaya profesional dan sokongan penempatan kerja untuk pelajar dan graduan.',
                        services: [
                            'Kaunseling kerjaya',
                            'Penulisan resume dan CV',
                            'Persediaan temuduga',
                            'Strategi pencarian kerja',
                            'Penempatan latihan industri',
                            'Karnival kerjaya dan acara rangkaian',
                        ],
                        hours: 'Isnin - Jumaat: 9:00 Pagi - 5:00 Petang',
                    },
                },
                
                counseling: {
                    issueType: 'Jenis Isu',
                    selectIssue: 'Pilih isu',
                    issues: {
                        academic: 'Tekanan Akademik',
                        personal: 'Isu Peribadi',
                        relationship: 'Masalah Hubungan',
                        anxiety: 'Kebimbangan & Kemurungan',
                        career: 'Bimbingan Kerjaya',
                        family: 'Isu Keluarga',
                        others: 'Lain-lain'
                    },
                    branch: 'Cawangan',
                    selectBranch: 'Pilih cawangan',
                    branches: {
                        kk: 'UMS Kota Kinabalu',
                        labuan: 'Kampus Antarabangsa UMS Labuan',
                        sandakan: 'Kampus Cawangan UMS Sandakan'
                    },
                    date: 'Tarikh',
                    time: 'Masa',
                    confirmation: 'Temujanji Disesahkan!',
                    notice: {
                        main: 'Sila semak e-mel anda untuk pengesahan.',
                        sub: 'Anda boleh menjadual semula atau membatalkan 24 jam sebelum temujanji.'
                    }
                },
                
                itSupport: {
                    contact: 'Bantuan IT 24/7: +60 88-329 000 | digital@ums.edu.my',
                    help: {
                        title: 'Masih Perlukan Bantuan?',
                        description: 'Lawati Kaunter Bantuan IT atau hantar tiket sokongan dalam talian',
                        email: 'E-mel Sokongan IT',
                        call: 'Hubungi Kaunter Bantuan'
                    },
                    faqs: {
                        wifi: {
                            title: 'Masalah WiFi / Log Masuk Rangkaian',
                            content: '1. Sambung ke WiFi "UMS-Student"\n2. Buka pelayar dan pergi ke wifi.ums.edu.my\n3. Masukkan ID Pelajar dan kata laluan\n4. Jika masalah berterusan, hubungi Bantuan IT di +60 88-329 000'
                        },
                        portal: {
                            title: 'Masalah Log Masuk Portal Pelajar',
                            content: '1. Pergi ke portal.ums.edu.my\n2. Gunakan ID Pelajar sebagai nama pengguna\n3. Kata laluan lalai ialah nombor IC (tanpa sengkang)\n4. Kosongkan cache pelayar jika halaman tidak dimuatkan\n5. Hubungi portal@ums.edu.my untuk bantuan'
                        },
                        password: {
                            title: 'Tetapkan Semula Kata Laluan / Pemulihan Akaun',
                            content: '1. Lawati portal.ums.edu.my/reset\n2. Masukkan ID Pelajar dan e-mel berdaftar\n3. Periksa e-mel anda untuk pautan tetapan semula\n4. Atau lawati Kaunter Bantuan IT dengan kad pelajar\n5. Lokasi: Jabatan IT, Tingkat Bawah, Bangunan Pentadbiran'
                        },
                        email: {
                            title: 'Persediaan E-mel (E-mel Pelajar)',
                            content: 'E-mel UMS anda: namaPelajar&Batch@iluv.ums.edu.my\n\nArahan Persediaan:\n1. Pergi ke outlook.office.com\n2. Log masuk dengan alamat e-mel penuh\n3. Kata laluan: Sama seperti kata laluan portal\n4. Dayakan 2FA untuk keselamatan\n\nPersediaan Mudah Alih:\n- Muat turun aplikasi Microsoft Outlook\n- Tambah akaun dengan kelayakan anda'
                        },
                        software: {
                            title: 'Pemasangan Perisian (Microsoft 365, Antivirus, dll.)',
                            content: 'Perisian Percuma untuk Pelajar UMS:\n\n1. Microsoft 365:\n- Lawati office.com/signin\n- Log masuk dengan e-mel UMS\n- Muat turun aplikasi Office\n\n2. Antivirus (Windows Defender):\n- Dipasang awal pada Windows\n- Atau muat turun dari software.ums.edu.my\n\n3. Perisian Lain:\n- Lawati it.ums.edu.my/downloads\n- Log masuk dengan kelayakan pelajar'
                        },
                        device: {
                            title: 'Penyelesaian Masalah Peranti (komputer riba/telefon)',
                            content: 'Masalah Biasa:\n\n1. Komputer Perlahan:\n- Kosongkan fail sementara\n- Lumpuhkan program permulaan\n- Jalankan imbasan antivirus\n\n2. Tidak Dapat Sambung ke WiFi Kampus:\n- Lupakan rangkaian dan sambung semula\n- Kemas kini pemacu peranti\n- Periksa jika alamat MAC didaftarkan\n\n3. Perlukan Bantuan?\n- Klinik IT: Setiap Isnin & Rabu, 2-4 PM\n- Lokasi: Makmal IT, Blok A'
                        },
                        printing: {
                            title: 'Masalah Sistem Percetakan',
                            content: '1. Tambah pencetak:\n- Pergi ke print.ums.edu.my\n- Muat turun pemacu pencetak\n- Pasang dan sambung\n\n2. Kredit Cetak:\n- Isi semula di kaunter perpustakaan\n- Atau dalam talian di portal.ums.edu.my/print\n\n3. Lokasi Cetak:\n- Perpustakaan (Semua tingkat)\n- Makmal Komputer\n- Pusat Pelajar\n\n4. Masalah? Hubungi: print@ums.edu.my'
                        },
                        lms: {
                            title: 'Masalah Kelas Dalam Talian / LMS (Google Classroom, Moodle, dll.)',
                            content: 'Sistem Pengurusan Pembelajaran:\n\n1. UMS Moodle:\n- URL: itel.ums.edu.my\n- Log masuk dengan kelayakan pelajar\n- Hubungi: +60 883 200 00\n\n2. Google Classroom:\n- Gunakan e-mel UMS untuk sertai kelas\n- Pasang aplikasi Google Meet\n\n3. Webex:\n- Percuma untuk pelajar melalui portal\n- Muat turun di webex.com\n\n4. Tidak dapat akses bahan kelas?\n- Kosongkan cache pelayar\n- Cuba pelayar berbeza\n- Hubungi pensyarah atau digital@ums.edu.my'
                        }
                    }
                },
                
                financialAid: {
                    contact: 'Pejabat Bantuan Kewangan: +60 88-320 000 | student-finance@ums.edu.my',
                    apply: {
                        title: 'Bagaimana Untuk Memohon?',
                        description: 'Lawati Pejabat Bantuan Kewangan atau mohon dalam talian melalui portal pelajar',
                        online: 'Mohon Dalam Talian',
                        contact: 'Hubungi Pejabat Bantuan Kewangan'
                    },
                    labels: {
                        amount: 'Jumlah',
                        eligibility: 'Kelayakan',
                        contact: 'Hubungan',
                        workload: 'Beban Kerja',
                        duration: 'Tempoh',
                        coverage: 'Liputan'
                    },
                    sections: {
                        scholarships: {
                            title: 'Biasiswa',
                            items: {
                                excellence: {
                                    name: 'Biasiswa Kecemerlangan UMS',
                                    description: 'Untuk pelajar dengan PNGK 3.75 dan ke atas'
                                },
                                deans: {
                                    name: 'Biasiswa Senarai Dekan',
                                    description: 'Untuk pencapaian Senarai Dekan'
                                },
                                sports: {
                                    name: 'Biasiswa Kecemerlangan Sukan',
                                    description: 'Untuk atlet peringkat negeri/kebangsaan'
                                },
                                needBased: {
                                    name: 'Bantuan Kewangan Berasaskan Keperluan',
                                    description: 'Untuk pelajar dari keluarga berpendapatan rendah'
                                },
                                ptps: {
                                    name: 'Sokongan Pendidikan PTPS',
                                    description: 'Bantuan kewangan kerajaan negeri untuk pelajar Sabah'
                                },
                                jpa: {
                                    name: 'Biasiswa JPA PBU',
                                    description: 'Biasiswa persekutuan untuk pengajian di universiti tempatan'
                                }
                            }
                        },
                        loans: {
                            title: 'Pinjaman Pelajar',
                            items: {
                                ptptn: {
                                    name: 'PTPTN',
                                    description: 'Skim pinjaman pendidikan kerajaan'
                                },
                                mara: {
                                    name: 'Pinjaman Pendidikan MARA',
                                    description: 'Untuk pelajar Bumiputera'
                                },
                                bank: {
                                    name: 'Pinjaman Pendidikan Bank',
                                    description: 'Pembiayaan pendidikan bank swasta'
                                }
                            }
                        },
                        workStudy: {
                            title: 'Program Belajar Sambil Bekerja',
                            items: {
                                assistant: {
                                    name: 'Pembantu Pelajar',
                                    description: 'Kerja sambilan di jabatan'
                                },
                                library: {
                                    name: 'Pembantu Perpustakaan',
                                    description: 'Bantu mengurus operasi perpustakaan'
                                },
                                lab: {
                                    name: 'Pembantu Makmal',
                                    description: 'Bantu di makmal komputer/sains'
                                },
                                research: {
                                    name: 'Pembantu Penyelidikan',
                                    description: 'Bantu pensyarah dalam projek penyelidikan'
                                },
                                customerService: {
                                    name: 'Perkhidmatan Pelanggan Dalam Talian',
                                    description: 'Sokongan pertanyaan pelajar dalam talian'
                                }
                            }
                        },
                        exchange: {
                            title: 'Program Pertukaran Mobiliti',
                            items: {
                                erasmus: {
                                    name: 'Erasmus+',
                                    description: 'Belajar di Eropah'
                                },
                                aims: {
                                    name: 'Mobiliti Antarabangsa ASEAN untuk Pelajar (AIMS)',
                                    description: 'Pertukaran dalam negara ASEAN'
                                },
                                commonwealth: {
                                    name: 'Biasiswa Komanwel',
                                    description: 'Belajar di UK, Australia, Kanada'
                                },
                                jasso: {
                                    name: 'Pertubuhan Perkhidmatan Pelajar Jepun (JASSO)',
                                    description: 'Pertukaran jangka pendek ke Jepun'
                                }
                            }
                        }
                    }
                },
                
                itel: {
                    title: 'Portal ITEL',
                    description: 'Akses portal Antarabangsa dan Pautan Luaran',
                    loading: 'Memuatkan portal ITEL...',
                },
                
                smpb: {
                    title: 'Portal SMPB',
                    description: 'Lembaga Pengurusan dan Prestasi Pelajar',
                    loading: 'Memuatkan portal SMPB...',
                },
                
                organisation: {
                    title: 'Direktori Organisasi',
                    description: 'Organisasi universiti, majlis, kelab dan persatuan.',
                    categories: {
                        branches: 'Cawangan UMS',
                        studentCouncil: 'Majlis Perwakilan Pelajar',
                        clubs: 'Kelab',
                        societies: 'Persatuan',
                    },
                    items: {
                        // Branches
                        umsKK: 'Kampus UMS Kota Kinabalu',
                        umsLabuan: 'Kampus Antarabangsa UMS Labuan',
                        umsSandakan: 'Kampus Cawangan UMS Sandakan',
                        
                        // Student Council
                        presidentKK: 'Presiden Majlis Perwakilan Pelajar (KK)',
                        vpKK: 'Naib Presiden (KK)',
                        secretaryKK: 'Setiausaha (KK)',
                        repLabuan: 'Wakil Pelajar (Labuan)',
                        repSandakan: 'Wakil Pelajar (Sandakan)',
                        
                        // Clubs
                        photoClub: 'Kelab Fotografi',
                        debateSociety: 'Persatuan Debat',
                        musicClub: 'Kelab Muzik',
                        sportsClub: 'Kelab Sukan',
                        marineClub: 'Kelab Biologi Marin (Labuan)',
                        wildlifeClub: 'Kelab Hidupan Liar (Sandakan)',
                        
                        // Societies
                        csSociety: 'Persatuan Sains Komputer',
                        engSociety: 'Persatuan Kejuruteraan',
                        bizSociety: 'Persatuan Perniagaan',
                        scienceSociety: 'Persatuan Sains',
                        intlBizSociety: 'Persatuan Perniagaan Antarabangsa (Labuan)',
                        marineScienceSociety: 'Persatuan Sains Marin (Sandakan)',
                    },
                },
                
                emergency: {
                    title: 'Hubungan Kecemasan',
                    description: 'Hubungi perkhidmatan kecemasan yang sesuai dengan segera jika diperlukan.',
                    hotline: 'Talian Kecemasan: 999 (Polis/Ambulans) | 994 (Bomba)',
                    importantReminders: 'Peringatan Penting:',
                    reminder1: '• Dalam kes kecemasan yang mengancam nyawa, hubungi 999 dengan segera',
                    reminder2: '• Untuk kecemasan kampus selepas waktu pejabat, hubungi Keselamatan Kampus',
                    reminder3: '• Simpan nombor ini dalam telefon anda',
                    reminder4: '• Tenang dan berikan maklumat yang jelas',
                    reminder5: '• Ketahui lokasi tepat anda',
                    university: 'Perkhidmatan Universiti',
                    medical: 'Kecemasan Perubatan',
                    security: 'Keselamatan Kampus',
                    fire: 'Bomba',
                    police: 'Polis',
                    ambulance: 'Ambulans',
                    campusSecurity: 'Pejabat Keselamatan Kampus',
                    healthCenter: 'Pusat Kesihatan Kampus',
                    mainOffice: 'Pejabat Utama',
                    hospital: 'Hospital',
                    policeStation: 'Balai Polis',
                    trafficPolice: 'Polis Trafik',
                    fireDepartment: 'Balai Bomba',
                    available24: 'Tersedia 24/7'
                },
                
                // NEW: Malay translations for Peer-to-Peer
                peerToPeer: {
                    intro: {
                        title: 'Apakah Hubungan Jabatan Rakan ke Rakan?',
                        description: 'Laluan langsung untuk berhubung dengan wakil pelajar, ketua fakulti, penasihat akademik, dan kakitangan pentadbiran. Dapatkan sokongan dan bimbingan yang anda perlukan dari orang yang tepat.'
                    },
                    assistance: {
                        title: 'Perlukan Bantuan Umum?',
                        description: 'Hubungi Pejabat Hal Ehwal Pelajar untuk pertanyaan umum',
                        call: '📞 +60 88-320 000',
                        email: '✉️ E-mel Kami'
                    },
                    departments: {
                        studentCouncil: {
                            title: 'Majlis Perwakilan Pelajar',
                            description: 'Suara anda dalam hal ehwal universiti'
                        },
                        facultyReps: {
                            title: 'Wakil Fakulti', 
                            description: 'Hubungan langsung dengan ketua fakulti'
                        },
                        campusAdmin: {
                            title: 'Pentadbiran Kampus',
                            description: 'Hubungan pentadbiran dan operasi'
                        },
                        academicAdvisors: {
                            title: 'Penasihat Akademik',
                            description: 'Dapatkan bimbingan mengenai hal ehwal akademik'
                        },
                        studentWelfare: {
                            title: 'Wakil Kebajikan Pelajar',
                            description: 'Sokongan untuk kebajikan dan kesejahteraan pelajar'
                        },
                        branchCampuses: {
                            title: 'Hubungan Kampus Cawangan',
                            description: 'Wakil dari semua cawangan UMS'
                        }
                    },
                    common: {
                        call: '📞 Panggilan',
                        whatsapp: 'WhatsApp'
                    }
                }
            }
        };
        
        this.init();
    }
    
    init() {
        this.updateLanguage(this.currentLanguage);
        this.initLanguageSwitcher();
        this.updatePageContent();
        
        // Add GSAP animation for initial load
        if (typeof gsap !== 'undefined') {
            gsap.from('.language-switcher', {
                duration: 0.8,
                opacity: 0,
                x: 20,
                delay: 0.5,
                ease: 'power2.out'
            });
        }
    }
    
    getSavedLanguage() {
        return localStorage.getItem('language');
    }
    
    saveLanguage(lang) {
        localStorage.setItem('language', lang);
    }
    
    setLanguage(lang) {
        if (this.currentLanguage !== lang) {
            this.currentLanguage = lang;
            this.saveLanguage(lang);
            this.updateLanguage(lang);
            this.updatePageContent();
            
            // Add animation effect
            const activeBtn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
            if (activeBtn && typeof gsap !== 'undefined') {
                gsap.fromTo(activeBtn,
                    { scale: 0.8 },
                    { scale: 1, duration: 0.3, ease: 'back.out(1.7)' }
                );
            }
            
            // Dispatch event for other scripts
            document.dispatchEvent(new CustomEvent('languageChanged', {
                detail: { language: lang }
            }));
        }
    }
    
    updateLanguage(lang) {
        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            if (btn.dataset.lang === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        
        // Update HTML lang attribute
        document.documentElement.lang = lang;
    }
    
    initLanguageSwitcher() {
        const switcher = document.querySelector('.language-switcher');
        if (!switcher) return;
        
        switcher.addEventListener('click', (e) => {
            const btn = e.target.closest('.lang-btn');
            if (btn && btn.dataset.lang) {
                this.setLanguage(btn.dataset.lang);
            }
        });
    }
    
    translate(key) {
        const keys = key.split('.');
        let value = this.translations[this.currentLanguage];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                console.warn(`Translation key not found: ${key}`);
                return this.getFallback(key);
            }
        }
        
        return value;
    }
    
    getFallback(key) {
        // Try English as fallback
        const keys = key.split('.');
        let value = this.translations['en'];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                return key; // Return the key itself as last resort
            }
        }
        
        return value;
    }
    
    updatePageContent() {
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            const translation = this.translate(key);
            
            if (translation !== undefined) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = translation;
                } else if (element.tagName === 'IMG') {
                    element.alt = translation;
                } else if (element.tagName === 'SELECT') {
                    // Handle select options if needed
                    element.innerHTML = '';
                } else {
                    element.textContent = translation;
                }
                
                // Add animation for text change
                if (typeof gsap !== 'undefined') {
                    gsap.fromTo(element,
                        { opacity: 0, y: -5 },
                        { opacity: 1, y: 0, duration: 0.3 }
                    );
                }
            }
        });
        
        // Update select options
        this.updateSelectElements();
        
        // Update page title
        const pageTitle = this.translate('mainPage.title');
        if (pageTitle && pageTitle !== 'mainPage.title') {
            document.title = pageTitle + ' | UMS ARCLEN';
        }
    }
    
    // Update select elements
    updateSelectElements() {
        document.querySelectorAll('select option[data-translate]').forEach(option => {
            const key = option.getAttribute('data-translate');
            const translation = this.translate(key);
            if (translation && translation !== key) {
                option.textContent = translation;
            }
        });
    }
    
    // Helper to get translation
    t(key) {
        return this.translate(key);
    }
    
    // Helper to translate arrays (for service lists)
    translateArray(key) {
        const translation = this.translate(key);
        if (Array.isArray(translation)) {
            return translation;
        }
        return [];
    }
}

// Initialize language manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.languageManager = new LanguageManager();
    
    // Listen for language changes in other scripts
    document.addEventListener('languageChanged', (e) => {
        console.log('Language changed to:', e.detail.language);
    });
});