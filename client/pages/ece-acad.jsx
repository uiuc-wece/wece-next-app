import { useState } from "react";
import Layout from "../components/layout";
import SectionBody from "../components/sectionbody";
import SectionHead from "../components/sectionhead";
import Container from "react-bootstrap/Container";

export default function GMSlides() {
  // Independent states for each dropdown
  const [open110, setOpen110] = useState(false);
  const [open120, setOpen120] = useState(false);

  const [openBasicQuantities, setOpenBasicQuantities] = useState(false);
  const [openSeriesParallel, setSeriesParallel] = useState(false);
  const [openKVL, setKVL] = useState(false);
  const [openWaveform, setWaveform] = useState(false);
  const [openDiode, setDiode] = useState(false);
  const [openCMOS, setCMOS] = useState(false);

  const[openBinary, setBinary] = useState(false);
  const[openBoolean, setBoolean] = useState(false);
  const[openFSM, setFSM] = useState(false);
  const[openMUX, setMUX] = useState(false);
  const[openClock, setClock] = useState(false);
  const[openMemory, setMemory] = useState(false);
  const[openCoding, setCoding] = useState(false);

  

  return (
    <Layout>
      <div className="container">
        <div className="content">
          <Container fluid className="section">
            <SectionHead title="ECE Academic Resources ✍︎" top={true} />
            <SectionBody>

              {/* --- ECE 110 DROPDOWN --- */}
              <div>
                <p
                  onClick={() => setOpen110(!open110)}
                  style={{
                    cursor: "pointer",
                    color: "#6108aaff",
                    fontWeight: "bold",
                    marginBottom: open110 ? "0.5rem" : "1rem",
                  }}
                >
                  ECE 110 Resources {open110 ? "📖" : "📘"}
                </p>

                {open110 && (
                  <div
                    style={{
                      marginLeft: "1rem",
                      padding: "0.5rem 1rem",
                      backgroundColor: "#fdfbbeff",
                      borderRadius: "0.5rem",
                      border: "1px solid #ddd",
                    }}
                  >
                    <p
                      onClick={() => setOpenBasicQuantities(!openBasicQuantities)}
                    >
                      {openBasicQuantities ? "⇩ " : "⇨ "}Basic Quantities 
                    </p>

                    {openBasicQuantities && <div>
                      Charge (Q): property of matter that makes things attract or repel each other
                      <br/>
                      <br/>
                      Current (I): amount of charge that flows through a section per time
                      <br/>
                      <br/>
                      Voltage (V): potential difference
                      <br/>
                      <br/>
                      Resistance (R): how much something slows down the flow of electricity
                      <br/>
                      <br/>
                      Ohm’s Law - doesn’t work for voltage/current sources, capacitors, or other non-linear components: V = IR
                      Resistance of cylindrical resistor formula: R = ρL/A
                      <br/>
                      <br/>
                      Energy: ability of substance to do work (measured in Joules)
                      <br/>
                      E = P * t = Q * V = I * V * t
                      <br/>
                      Energy of a battery: V * Ah * 3600
                       <br/>
                      Energy Efficiency: Energy Used / Total Energy
                      <br/> 
                      <br/>
                      Power: rate at which energy is absorbed or supplied (measured in Watts)
                      <br/>
                      P = ΔE/Δt
                      <br/>
                      P = I * V = V^2 / R = I^2 / R
                      <br/>
                      <br/>
                      Capacitance: ability of a component to store charge (measured in Farads)
                      <br/>
                      C = Q/V
                      <br/>
                      Energy of a Capacitor: ½ CV^2
                      <br/>
                      <br/>



                    
                      
                    </div>}

                    
                    <p
                      onClick={() => setSeriesParallel(!openSeriesParallel)}
                    >
                      {openSeriesParallel ? "⇩ " : "⇨ "}Series and Parallel 
                    </p>

                    {openSeriesParallel && <div>
                      Series: current flows from one component to another (current is the same)
                      <br/>
                      Equivalent Resistance: R1+ R2 + R3....
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/series.png"
                      />

                      <br/>
                      <br/>
                      Parallel: current can travel from one node to another (voltage is the same)
                      <br/>
                      Equivalent Resistance: 1/Req = 1/R1 + 1/R2 + …
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/parallel.png"
                      />
                      <br/>
                      <br/>
        
                     



                      



                    
                      
                    </div>}

                    <p
                      onClick={() => setKVL(!openKVL)}
                    >
                      {openKVL ? "⇩ " : "⇨ "}KVL, KCL, and Others... 
                    </p>

                    {openKVL && <div>
                      KVL: used over a closed loop, net voltage has to be 0
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/kvl.png"
                      />
                      <br/>
                      <br/>
                      Voltage Divider: find voltage across a series of elements
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/vdivider.png"
                      />
                      <br/>
                      <br/>
                      KCL: used on nodes/supernodes, net current has to be 0
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/kcl.png"
                      />
                      <br/>
                      <br/>
                      Current Divider: find current across across parallel elements
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/cdivider.png"
                      />
                      <br/>
                      <br/>
                      Node Method:
                      <br/>
                       <br/>
                      1: Pick a reference node
                       <br/>
                      2: Apply KCL at each non-ground node
                       <br/>
                      3: Express each current using Ohm’s Law (I = V/R)
                        <br/>
                      4: Write one equation per node
                       <br/>
                      5: Solve the equations for unknown voltages
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/nodemethod.png"
                      />
                      <br/>
                      <br/>


                      




                      
                      
                    </div>}

                    <p
                      onClick={() => setWaveform(!openWaveform)}
                    >
                      {openWaveform ? "⇩ " : "⇨ "}Waveforms and IV Characteristics
                    </p>

                    {openWaveform && <div>
                      Waveforms
                      <br/>
                      <br/>
                      Duty Cycle (for square waveform): Ton / T → Asqrt(DC)
                      <br/>
                      Vrms: equivalent DC voltage that supplies the same power as the varying voltage
                      <br/>
                      Formulas:
                      <br/>
                      <br/>
                       <img
                          src="../imgs/acad-imgs/waveforms.png"
                      />
                      <br/>
                      <br/>
                      IV Characteristics: shows the operating behavior of a circuit at different current and voltage values
                     <br/>
                      <br/>
                      - I-intercept: short-circuit current Isc
                       <br/>
                      - V-intercept: open-circuit voltage Voc
                        <br/>
                      - Resistance: 1/Slope

                      <br/>
                      <br/>

                      <img
                          src="../imgs/acad-imgs/tvsn.png"
                      />

                      


                       <img
                          src="../imgs/acad-imgs/tvsn.png"
                      />
                      <br/>
                      <br/>
                      

 





                      
                      
                      
                    </div>}


                    <p
                      onClick={() => setDiode(!openDiode)}
                    >
                      {openDiode ? "⇩ " : "⇨ "}Diodes and BJTs
                    </p>

                    {openDiode&& <div>
                      
                      
                    
                      Diodes: Only allows voltage to travel one way. 
                      <br/>
                      Diode ON: ID greater than 0, VD=VON, Diode OFF: ID less than 0, ID=0 A
                      <br/>
                      When there are opposing diodes in series, one must be OFF 
                      <br/>
                      Voltage-Clipper: sets minimum or maximum output voltage 
                      <br/>
                      Voltage source placed in series with diode, and parallel to output. Minimum output determined when diode is same direction as voltage clipper. Maximum output determined when diode is opposite direction as voltage clipper.

                      <br/>
                      <br/>

                      BJTs

                       <br/>

                       Common-Emitter NPN Model: 
                       <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/npn1.png"
                      />
                      <br/>
                      <br/>
                      OFF: IB=0, so IC=0
                      <br/>
                      Active: IB greater than 0, IC=βIB less than IC, SAT
                      <br/> 
                      Saturation: βIB greater than IC, SAT, IC=IC, SAT
                      <br/>
                      Graph: Slope will be -1/RC, operating point is where line crosses given IB value 
                      <br/>
                      VCE, SAT is where IB lines are vertical, near zero
                      <br/>
                      <br/>
                       <img
                          src="../imgs/acad-imgs/npn2.png"
                      />
                      <br/>
                      <br/>



                      
                      
                      
                    </div>}


                     <p
                      onClick={() => setCMOS(!openCMOS)}
                    >
                      {openCMOS ? "⇩ " : "⇨ "}CMOS, Photodiodes and Solar Panels 
                    </p>

                    {openCMOS && <div>
                      
                      <br/>
                      <br/>

                      Mosfets/CMOS

                      <br/>
                      <br/>

                      <img
                          src="../imgs/acad-imgs/cmos.png"
                      />

                      <br/>
                      <br/>

                      

                      





                      Photodiodes and Solar Panels 

                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/solar.png"
                      />
                      <br/>
                      <br/>

                      

 





                      
                      
                      
                    </div>}

                    


                
                    
                  </div>
                )}
              </div>

              {/* --- ECE 120 DROPDOWN --- */}
              <div style={{ marginTop: "1rem" }}>
                <p
                  onClick={() => setOpen120(!open120)}
                  style={{
                    cursor: "pointer",
                    color: "#6108aaff",
                    fontWeight: "bold",
                    marginBottom: open120 ? "0.5rem" : "1rem",
                  }}
                >
                  ECE 120 Resources {open120 ? "📖" : "📘"}
                </p>

                {open120 && (
                  <div
                    style={{
                      marginLeft: "1rem",
                      padding: "0.5rem 1rem",
                      backgroundColor: "#f7d7f9ff",
                      borderRadius: "0.5rem",
                      border: "1px solid #ddd",
                    }}
                  >

                    <p
                      onClick={() => setBinary(!openBinary)}
                    >
                      {openBinary ? "⇩ " : "⇨ "}Binary Numbers and Operations
                    </p>

                    {openBinary && <div>
                      -  Binary Numbers and Operations.
                      <br/>
                      <br/>
                      Represent 2k values, need k bits. 
                      <br/>
                      Represent N values, need log2(N) bits.
                      <br/>
                      Multiply by 2 = shift all numbers to the left and insert 0 on the right. 
                      <br/>
                      Carry out: MSB is greater than 1.
                      <br/>
                      <br/>
                      -  Unsigned Integer Representation 
                      <br/>
                      <br/>
                      Only represents positive integers 
                      <br/>
                      Range: 0 to 2k-1 (k is number of bits)
                      <br/>
                      Overflow: occurs when there is carry out
                      <br/>
                      Sign Extension: add 0s to the left side 
                      <br/>
                      <br/>
                      -  2’s Complement Integer Representation 
                      <br/>
                      <br/>
                      Leading 1 means negative, leading 0 means positive 
                      <br/>
                      Range: -2k-1 to 2k-1-1 (k is number of bits)
                      <br/>
                      Overflow: occurs when two positive numbers add to get a negative 
                      number and vice versa, or when decimal value is out of range 
                      <br/>
                      Sign Extension: add 0s on left side for positive number, 1s for negative number 

                      <br/>
                      <br/>
                    - Decimal to 2’s Complement 
                      <br/>
                      <br/>
                      -A = complement(A)+1
                      <br/>
                      Convert to binary, take complement, add 1
                      <br/>
                      <br/>
                    - IEEE Representation 
                      <br/>
                      <br/>
                      32 bits: 1 = sign, 8 = exponent, 23 = mantissa 
                      <br/>
                      (-1)sign * 1.mantissa * 2(exponent -127)
                      <br/>
                      <br/>
                    - Hexadecimal Representation
                      <br/>
                      <br/> 
                      Each bit represents 0-15, with 10-15 as A-F
                      Hexadecimal bit can be represented through four binary bits 
                      <br/>
                      <br/> 


                     



                    

                      
                      

 





                      
                      
                      
                    </div>}

                     <p
                      onClick={() => setBoolean(!openBoolean)}
                    >
                      {openBoolean ? "⇩ " : "⇨ "}Boolean Logic, Gates, and CMOS
                    </p>

                    {openBoolean && <div>

                      Sum-of-Products (SOP): AB+BC 
                      <br/>
                      - Circle 1’s in K-map, write each circle as a term 
                      <br/>
                      <br/>
                      Product-of-Sums (POS): (A’+B’)(B’+C’)
                      <br/>
                      Circle 0’s in K-map, write each circle in a set of parentheses 
                      <br/>
                      FLIP THE TERMS FOR POS
                      <br/>
                      <br/>
                      Canonical Form: each term includes all variables
                      <br/>
                      <br/>
                      Ex: (A+B’+C)(A’+B+C’)(A+B+C’)
                      <br/>
                      <br/>
                      K-maps: write out all terms visually, make circles that are 1, 2, 4, 8, etc. boxes large 
                      <br/>
                      - Only account for terms that are similar between all terms circled 
                      <br/>
                      - Use as less circles as possible, but make circles as large as possible
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/kmap.png"
                      />
                      <br/>
                      <br/>
                      X’s mean don’t care, can be combined in a loop if it makes the loop larger but doesn’t necessarily have to be looped in
                      <br/>
                      <br/>
                      DeMorgan’s Laws: 
                      <br/>
                      <br/>
                      (AB)’ = A’ + B’      (A+B)’ = A’B’
                      <br/>
                      See formula sheet for more properties 

                      <br/>
                      <br/>
                      Logic Gates:
                      <br/>
                      <br/>
                      Arithmetic: bits had numeric value 
                      <br/>
                      Logical: bits have logical values, true (1) or false (0)
                      <br/>
                      <br/>
                      AND Gate: A*B:  A*B = 1 when both A and B are 1, otherwise A*B = 0. NAND is the NOT of AND.
                      <br/>
                      AND gate example↓
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/and.png"
                      />
                      <br/>
                      <br/>
                      OR Gate: A+B:  A+B = 1 when either A or B is 1, otherwise A+B = 0. NOR Gate: opposite of OR gate.
                      <br/>
                      OR gate example↓
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/or.png"
                      />





                      <br/>
                      <br/>

                      NOT Gate: A’↓ ( A’ = 1 when A is 0, otherwise A’ = 0)
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/not.png"
                      />
                      <br/>
                      <br/>
                      XOR Gate: A⊕B: A⊕B = 1 when A = 0 and B = 1, or A = 1 and B = 0, otherwise A⊕B = 0
                      XNOR Gate: opposite of XOR gate
                      <br/> XOR Gate Example ↓
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/xor.png"
                      />
                      <br/>
                      <br/>
                      MOSFETS: Act as a switch, have a threshold value that the input voltage must meet to execute 
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/mosfet.png"
                      />
                      <br/>
                      <br/>



                      
                      
                      
                      






                       </div>}
                       <p
                      onClick={() => setFSM(!openFSM)}
                    >
                      {openFSM ? "⇩ " : "⇨ "}Finite State Machines
                    </p>
                    {openFSM && <div>
                      Finite State Machines:
                      <br/>
                      <br/>
                      - Contains possible inputs, outputs, transition rules, and method to calculate next state
                      <br/>
                      2N states represented through N bits SN, SN-1, … , S1, S0
                      <br/>
                      Moore Machine: FSM only relies on current state (used in 120). Mealy Machine: output can also depend on the inputs. 
                      <br/>
                      Mealy Machine: output can also depend on
                      the inputs 
                      <br/>
                      
                      Each state is a bubble that contains a title, binary ID, and output 
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/fsm1.png"
                      />
                       <br/>
                      <br/>
                      Arrows point between states to represent transitions, using inputs
                       <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/fsm2.png"
                      />
                      <br/>
                      <br/>
                      Final circuit will contain gates that determine the next state through the outputs from the flip flops (each flip flop represents one Si)

                       






                      </div>}

                      <p
                      onClick={() => setMUX(!openMUX)}
                    >
                      {openMUX ? "⇩ " : "⇨ "}MUX, Decoders, and More...
                    </p>

                    {openMUX && <div>
                      MUX and Decoders
                      <br/> 
                      <br/> 
                      N-to-M multiplexer represents M separate (N/M)-to-1 muxes 
                      <br/> 
                      <br/>
                      P = 2N inputs, N bits of select inputs
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/mux.png"
                      />
                      <br/> 
                      <br/>
                      Demultiplexers (DEMUX): one input, multiple outputs 
                      <br/>
                      P = 2N outputs, N bits of select inputs
                      <br/> 
                      <br/>
                      <img
                          src="../imgs/acad-imgs/demux.png"
                      />
                      <br/> 
                      <br/>
                      Decoders: one input of N bits, 2^N outputs 
                      <br/>
                      Exactly one resulting signal has value 1, the rest are 0
                       <br/> 
                      <br/>
                      <img
                          src="../imgs/acad-imgs/decoder.png"
                      />
                      <br/>
                      <br/>
                      Enable Pin (not shown above): if EN = 0, all outputs are 0
                      <br/> 
                      <br/>
                      Bit Slicing
                      <br/> 
                      <br/>
                      Ripple Carry Adder (Full Adder): inputs A, B, and Cin, outputs S and C-out
                      <br/> 
                      <br/>
                      <img
                          src="../imgs/acad-imgs/adder.png"
                      />
                      <br/> 
                      <br/>
                      Cout = AB+ACin+BCin
                      <br/>
                      Bit-Sliced Comparator: inputs A, B, output Z0Z1 
                      <br/>
                      A and B equal: pass along previous answer
                      <br/>
                      A greater than B or A less than B: override previous answer
                      <br/>
                      Starts at right and moves left 
                      <br/> 
                      <br/>





                      </div>}

                      <p
                      onClick={() => setClock(!openClock)}
                    >
                      {openClock ? "⇩ " : "⇨ "}Latches, Flip-Flops and More...
                    </p>

                    {openClock && <div>

                      Latches:
                      <br/>
                      Picture of a Gated D-Latch ↓
                      <br/>
                      <br/>
                       <img
                          src="../imgs/acad-imgs/dlatch.png"
                      />
                      <br/>
                      <br/>
                      WE = 0: latch (Q) holds previous value 
                      <br/> 
                      WE = 1: latch (Q) holds current D value 

                      <br/>
                      <br/>
                      Flip-Flops:
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/flipflop.png"
                      />
                      <br/>
                      Clock: square wave, flip flop will load value of D on positive edge (switching from 0 to 1), shown above 
                      <br/>
                      Flip flop can also be negative edge triggered, denoted by bubble on CLK
                      <br/>
                      Sequential circuits should have synchronized clock input 
                      <br/>
                      <br/>
                      Registers
                       <br/>
                      <br/>
                        Series of flip flops attached together to store multiple values 
                       <br/>
                       Shift Register: value is entered in one flip flop, and then moved down through several other flip flops 
                       <br/>
                       <br/>
                       <img
                          src="../imgs/acad-imgs/register.png"
                      />
                      <br/>
                       <br/>
                       Serialization
                       <br/>
                       <br/>
                       Combining bit slices and flip flops to use less components, and only need one bit slice 
                       <img
                          src="../imgs/acad-imgs/serial.png"
                      />







                



                       </div>}

                        <p
                      onClick={() => setMemory(!openMemory)}
                    >
                      {openMemory ? "⇩ " : "⇨ "}LC-3, ISA, and Memory
                    </p>

                    {openMemory && <div>
                      Memory
                      <br/>
                      <br/>
                      Stores information in binary 
                      RAM: random access memory, information can be read/written 
                      <br/>
                      Static RAM (SRAM): two-inverter loop (faster)
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/sram.png"
                      />
                      <br/>
                      <br/>
                      Dynamic RAM (DRAM): capacitor stores bits (more dense)
                      <br/>
                      <br/>

                      K-bit ADDR with 2k addresses 
                      Addresses tell the chip which piece of memory to read/write 
                      <br/>
                      CS: chip select (0 = memory does nothing, 1 = memory reads/writes)
                      <br/>
                      WE: determines whether to read or write (0 = read, 1 = write)

                      <br/>
                      <br/>
                      

                      <img
                          src="../imgs/acad-imgs/dataslice.png"
                      />

                      <br/>
                      <br/>
                      Tri-State Buffer
                      <br/>
                      <br/>
                      <img
                          src="../imgs/acad-imgs/tri.png"
                      />
                      <br/>
                      <br/>
                      Von Neumann Model: Contains memory, processing unit (ALU), and control unit

                      <br/>
                      <br/>
                      
                      <img
                          src="../imgs/acad-imgs/vonneu.png"
                      />

                      <br/>
                      <br/>
                      Assembly
                      <br/>
                      Each line of program is an instruction, an assembler directive (pseudo-op), a comment.
                      Whitespace and case are ignored, comments (beginning with ;) are ignored.
                      <br/>
                      <br/>
                      Format: OPCODE OPERANDS ; COMMENTS
                       <br/>
                       Opcodes: symbols that correspond to LC-3 instructions (ex: ADD, AND)
                      <br/>
                      Operands: Registers are specified by Rx where x is the register #.
                      Numbers are indicated by # (if in decimal) or x (hex). Separated by commas. Ex: ADD R0, R0, R1 ;add the values in R0 and R1 and store the sum in R0

                      <br/>
                      <br/>
                      Labels (optional): Written at the beginning of the line. Ex: LOOP   ADD R1, R1, #-1
				       BRp LOOP.


                      <br/>
                      <br/>
                      Assembler Directives: .ORIG = starting address of the program, .END = end of program, .BLKW = allocate x words of storage, .FILL = allocate one word, .STRINGZ = allocate n+1 locations for n-character string

                        <br/>
                        <br/>

                        Trap Codes: HALT (TRAP x25): halts execution of the program and prints message to console. IN (TRAP x23): print prompt on the console, read and echo one character from keyboard. OUT (TRAP x21): write one character to console. GETC (TRAP x20): read one character from keyboard. PUTS (TRAP x22): write null-terminating string to the console.

                        <br/>
                        <br/>
                        LC-3
                        <br/>
                        



                        <br/>
                        Registers: contains 8 registers (R0-R7) to hold 16 bits of information 
                        <br/>
                        Addresses: contains 216 addresses with 16-bit addressability 

                        <br/>
                        ALU: runs 16-bit operands 

                        <br/>
                        Instructions: 16 bits to encode, first four are the opcode. Opcodes tell the computer which operation to carry out, rest of the bits depend on what the opcode is.

                        <br/>

                        <br/>
                        ISA (Instruction Set Architecture): 3 kinds of opcodes: operations, data movement, control flow. Operations: ADD (0001), AND (0101), NOT (1001) (one source one destination register). Data Movement: loads (memory to register), stores (register to memory). Control Flow: condition codes based on last value written to register file (negative, zero, or positive). 



                        <br/>
                        TRAP: nvokes operating system services (used to stop program, or get input from keyboard)
                        <br/>
                        <br/>
                        DO NOT change R7, this is used by operating system to store extra values 

                        <br/>















                      


                      </div>}
                       <p
                      onClick={() => setCoding(!openCoding)}
                    >
                      {openCoding ? "⇩ " : "⇨ "}C-Programming
                    </p>

                    {openCoding && <div>

                          Variables:
                        <br/>
                        <br/>
                        int: 32-bit 2’s complement (integers)
                        <br/>
                        char: 8-bit 2’s complement in ASCII (characters)
                        <br/>
                        float: IEEE 754 single-precision (32 bits) (decimals)
                        <br/>
                        double: IEEE 754 double-precision (64 bits) (decimals)
                        <br/>
                        <br/>

                        Arithmetic Operators:
                        <br/><br/>
                        Addition: +
                        <br/>
                        Subtraction: -
                        <br/>
                        Multiplication: *
                        <br/>
                        Division: /
                        <br/>
                        Modulus: % (returns remainder of division operation)
                        <br/><br/>

                        Bitwise Operators:
                        <br/><br/>
                        AND: &
                        <br/>
                        OR: |
                        <br/>
                        NOT: ~
                        <br/>
                        XOR: ^ (NOT used for exponentiation)
                        <br/>
                        Left Shift: &lt;&lt; (adds N 0s on right, or multiply by 2ⁿ)
                        <br/>
                        Right Shift: &gt;&gt; (subtract N 0s on left, or divide by 2ⁿ)
                        <br/><br/>

                        Basic I/O (Input/Output):
                        <br/><br/>
                        Use #include &lt;stdio.h&gt;
                        <br/>
                        Print: printf, use \n for a new line
                        <br/><br/>

                        Format Specifiers:
                        <br/><br/>
                        %c: int/char as ASCII character
                        <br/>
                        %d: int (decimal)
                        <br/>
                        %e: double (decimal scientific notation)
                        <br/>
                        %f: double (decimal)
                        <br/>
                        %u: unsigned int (decimal)
                        <br/>
                        %x: int (lower-case hexadecimal)
                        <br/>
                        %X: int (upper-case hexadecimal)
                        <br/><br/>

                        For printf:
                        <br/>
                        Example: printf("This number: %d", 8);
                        <br/>
                        %c: character
                        <br/>
                        %d: integer
                        <br/>
                        %f: float
                        <br/>
                        %lf: double
                        <br/>
                        %u: unsigned int
                        <br/><br/>

                        For scanf:
                        <br/>
                        Example: scanf("%d%d", &amp;A, &amp;B);
                        <br/><br/>

                        More Tips:
                        <br/><br/>
                        All lines end in ;
                        <br/><br/>

                        If/Else Statements: executes different blocks of code depending on whether something is true or false
                        <br/>
                        Example:
                        <br/>
                        if (condition) {<br/>
                        // code if true<br/>
                        } else if (another_condition) {<br/>
                        // code if true<br/>
                        } else {<br/>
                        // code if previous conditions are false<br/>
                        }
                        <br/><br/>

                        While Loops: repeats a block of code while a condition remains true
                        <br/>
                        Example:
                        <br/>
                        while (condition) {<br/>
                        // repeat code<br/>
                        }
                        <br/><br/>

                        For-Loops: repeat a block of code for a specific number of times
                        <br/>
                        Format: for (initialization; condition; update)
                        <br/>
                        Example:
                        <br/>
                        for (int i = 0; i &lt; n; i++) {<br/>
                        // block of code that runs each iteration<br/>
                        }
                        <br/><br/>

                        Do-While Loops: similar to a while loop, but executes at least once
                        <br/>
                        Example:
                        <br/>
                        do {<br/>
                        // run block of code once<br/>
                        } while (condition);
                        <br/>

                       </div>}


                                            








                    
                    
                    <p>
                    
                      <p>
                      
                    </p>
                    
                    
                    
                    </p>
                    
                    
                    
                  </div>
                )}
              </div>

            </SectionBody>
          </Container>
        </div>
      </div>
    </Layout>
  );
}
