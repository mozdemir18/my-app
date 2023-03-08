import React, { useEffect, useState } from 'react'
import DoctorWrapper from '../../components/doctor/DoctorWrapper'
import { useRouter } from 'next/router'

export default function Doctor() {
  const router = useRouter()
  const [doctors, setDoctors] = useState(null);
  const { name, country } = router.query

	useEffect(() => {
		async function fetchData() {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}auth/profile/?name=${name}&country=${country}&is_employee=true`)
	    const doctor = await response.json()
      setDoctors(doctor);
		}
    if (!router.isReady) {
      return;  // NOTE: router.query might be empty during initial render
    }
		fetchData();
    console.log(name);
	}, [router.isReady]);

  return (
    <div>
        <DoctorWrapper doctors={doctors} />
    
    </div>
  )
}
