import React from 'react'

function Challan() {
  return (
    <div>
        <div className='conatiner p-5'>
              <div className='border-2 border-black p-5'>
                <div className='font-extrabold text-center'>
                      <div className='text-4xl'>MS MANJU TRANSPORT</div>
                      <div>Transport Contractor & Commission Agent</div>
                      <div>Road Station, Krishnagar, Nadia, W.B.</div>
                      <div>Mobile : 8348380680</div>
                </div>
                <div className='form_wrapper'>
                    <div className='date_wrapper flex justify-between'>
                        <div>No-</div>
                        <div>
                              <label>Date : </label>
                              <input type="date"/>
                        </div>
                      </div>
                      <div>
                            <div className='flex'>
                                <div className='flex-1 flex'>
                                    <label>M/s : </label>
                                    <input className="flex-1" type="text" />
                                </div>
                            <div className='flex-1 flex'>
                                    <label> Truck No. : </label>
                                    <input className="flex-1" type="text" />
                                </div>
                            </div>
                          

                            <div className='flex'>
                                <div className='flex-1 flex'>
                                        <label>Load From : </label>
                                        <input className="flex-1" type="text" />
                                </div>
                                <div className='flex-1 flex'>
                                        <label>To : </label>
                                        <input className="flex-1" type="text" />
                                </div>
                            </div>
                          
                          <div className='flex'>
                              <label>Party Name : </label>
                              <input type="text" className='flex-1'/>
                          </div>

                            <div className='flex'>
                                <div className='flex-1 flex'>
                                    <label>Amount: </label>
                                    <input type="text" className='flex-1'/>
                                </div>
                                <div className='flex-1 flex'>
                                    <label>Material : </label>
                                    <input type="text" className='flex-1'/>
                              </div>
                            </div>
                            <div className='flex'>
                                <div className='flex-1 flex'>
                                    <label>Wheeler : </label>
                                    <input type="text" className='flex-1 ml-1'/>
                                </div>
                                <div className='flex-1 flex'>
                                    <label>Tonnage : </label>
                                    <input type="text" className='flex-1'/>
                                </div>
                            </div>

                          
                        <div className='flex'>
                                <div className='flex-1 flex'>
                                    <label>Driver Name : </label>
                                    <input type="text" className='flex-1'/>
                                </div>
                            <div className='flex-1 flex'>
                                <label>Driver's Mob. No. : </label>
                                <input type="text" className='flex-1'/>
                            </div>
                        </div>  

                        <div className='flex'>
                                <div className='flex-1 flex'>
                                    <label>Owner Name : </label>
                                    <input type="text" className='flex-1'/>
                                </div>
                            <div className='flex-1 flex'>
                                <label>Owner's Mob. No. : </label>
                                <input type="text" className='flex-1'/>
                            </div>
                        </div>  

                      </div>
                  </div>
              </div>      
        </div>      
    </div>
  )
}

export default Challan