import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function JobHistoryDialog() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = (event) => {
        event.preventDefault();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const titleStyle = {
        fontFamily: 'IBMPlexMono',
        fontWeight: 'bold',
        fontSize:'2rem',
        color:'#f76c6c',
        
    }

    return (
        <div>
            <a onClick={handleClickOpen} href="/">
                <p style={titleStyle}>Job history</p>
            </a>
            <Dialog open={open} onClose={handleClose} scroll={'paper'} aria-labelledby="scroll-dialog-title" aria-describedby="scroll-dialog-description">
                <DialogTitle >Jobs</DialogTitle>
                <DialogContent>
                    <DialogContentText  tabIndex={-1}>
                        <table>
                            <tbody>
                                {/* Jobs in reverse order */}
                                <tr>
                                    <td className='job-title'>Avanade: Cloud Engineering Intern</td>
                                    <td>Jun 2022 - Aug 2022</td>
                                </tr>
                                <tr>
                                    <ul>
                                        <li>Developed and implemented cloud-based solutions in Microsoft Power BI to analyze and visualize retail KPIs</li>
                                        <li>Collaborated with cross-functional teams to gather requirements, design data models, and create interactive dashboards for retail analytics using Power BI</li>
                                    </ul>
                                </tr>

                                <tr>
                                    <td className='job-title'>Philmont Country Club: Assistant to the director</td>

                                    <td>Jun 2022 - Aug 2022</td>
                                </tr>
                                <tr>
                                    <ul>
                                        <li>Planned events for members such as tournaments & club breakfasts</li>
                                        <li>Implemented ideas to cut cost and increase member retention</li>
                                        <li>Maintained club facilities and enhanced club aesthetics</li>
                                    </ul>
                                </tr>

                                <tr>
                                    <td className='job-title'>Murray Ave Kosher: Stocker</td>

                                    <td>Jan 2022 - May 2022</td>
                                </tr>
                                <tr>
                                    <ul>
                                        <li>Performed essential stocker duties</li>
                                    </ul>
                                </tr>

                                <tr>
                                    <td className='job-title'>Fluent Concepts: Backend Engineering Intern</td>

                                    <td>Jun 2021 - Aug 2021 & Nov 2021 - Jan 2022</td>
                                </tr>
                                <tr>
                                    <ul>
                                        <li>Improved and condensed PHP legacy source code</li>
                                        <li>Optimized MySQL query functions for faster search results</li>
                                        <li>Participated and collaborated in weekly development meetings</li>
                                    </ul>


                                </tr>


                                <tr>
                                    <td className='job-title'>Allstate Insurance: Sales Associate / Marketing Intern</td>

                                    <td>Jun 2021 - Aug 2021 | Nov 2021 - Jan 2022</td>
                                </tr>
                                <tr>
                                    <ul>
                                        <li>Generated quotes by cold calling 100+ prospective clients weekly</li>
                                        <li>Cross sold insurance to 50+ clients weekly</li>
                                        <li>Performed clerical duties on a daily basis</li>
                                    </ul>


                                </tr>

                                <tr>
                                    <td className='job-title'>Farmers Insurance: Customer Service / Telemarketer</td>

                                    <td>Nov 2020 - Mar 2021</td>
                                </tr>
                                <tr>
                                    <ul>
                                        <li>Incrreased client count by making 100+ cold calls daily</li>
                                        <li>Performed clerical duties on a daily basis</li>
                                        <li>Assisted customers on the phone and in-person</li>
                                    </ul>


                                </tr>

                                <tr>
                                    <td className='job-title'>BestBuyFurniture: Sales Associate</td>

                                    <td>May 2019 - Aug 2019</td>
                                </tr>
                                <tr>
                                    <ul>
                                        <li>Assisted customers with furniture needs</li>
                                        <li>Created a filing system to organize previous years invoices</li>
                                    </ul>


                                </tr>


                                <tr>
                                    <td className='job-title'>House of Kosher: Stocker</td>

                                    <td>May 2018 - Aug 2018</td>
                                </tr>
                                <tr>
                                    <ul>
                                        <li>Performed essential stocker duties</li>
                                        <li>Prepared the new warehouse for loading produce</li>
                                        <li>Confirmed precise records of delivery receipts</li>
                                    </ul>


                                </tr>




                                {/* ... add other jobs in reverse order ... */}
                                <tr>
                                    <td className='job-title'>Tutor</td>
                                    <td>2017 - 2021</td>
                                </tr>
                                <tr>
                                    <ul>
                                        <li>Tutored math, science, and CS</li>
                                    </ul>
                                </tr>
                            </tbody>
                        </table>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default JobHistoryDialog;
