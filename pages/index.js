const style = {
  wrapper: `h-screen w-screen flex flex-col`,
}

export default function Home() {
  return (
    <div className={style.wrapper}>
      {/* navbar */}
      <div className={style.main}>{/* Map */}</div>
        <div className={style.rideRequestContainer}>
          <div className={style.rideRequest}>
              {/* location select */}
              {/* confirm ride */}
          </div>
      </div>
    </div>
  )
}
