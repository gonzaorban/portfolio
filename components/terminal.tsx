"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const commands = [
  { prompt: "$ whoami", output: ["gonzaorban"] },
  { prompt: "$ cat rol.txt", output: ["Desarrollador Backend", "Investigador en Ciberseguridad", "Arquitecto de Software"] },
  { prompt: "$ pwd", output: ["/home/gonza/resistencia-chaco-argentina"] },
  { prompt: "$ cat estado.txt", output: ["4to Año - Ingeniería en Sistemas de Información @ UTN", "Becario de Investigación CInApTIC"] },
]

export function Terminal() {
  const [displayedCommands, setDisplayedCommands] = useState<number>(0)
  const [typingIndex, setTypingIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [showOutput, setShowOutput] = useState(false)

  useEffect(() => {
    if (displayedCommands >= commands.length) return

    const currentCommand = commands[displayedCommands]
    
    if (typingIndex < currentCommand.prompt.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentCommand.prompt.slice(0, typingIndex + 1))
        setTypingIndex(typingIndex + 1)
      }, 50 + Math.random() * 30)
      return () => clearTimeout(timeout)
    } else if (!showOutput) {
      const timeout = setTimeout(() => {
        setShowOutput(true)
      }, 300)
      return () => clearTimeout(timeout)
    } else {
      const timeout = setTimeout(() => {
        setDisplayedCommands(displayedCommands + 1)
        setTypingIndex(0)
        setCurrentText("")
        setShowOutput(false)
      }, 1200)
      return () => clearTimeout(timeout)
    }
  }, [displayedCommands, typingIndex, showOutput])

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-full max-w-2xl mx-auto lg:max-w-none"
    >
      <div className="rounded-lg border border-border/50 overflow-hidden bg-card/50 backdrop-blur-sm">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-border/50 bg-secondary/30">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="text-xs text-muted-foreground font-mono ml-2">gonza@portfolio:~</span>
        </div>
        
        {/* Terminal Body */}
        <div className="p-4 font-mono text-sm min-h-[280px] space-y-3">
          {/* Previous commands */}
          {commands.slice(0, displayedCommands).map((cmd, index) => (
            <div key={index} className="space-y-1">
              <div className="text-primary">{cmd.prompt}</div>
              {cmd.output.map((line, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-foreground/90 pl-2"
                >
                  {line}
                </motion.div>
              ))}
            </div>
          ))}
          
          {/* Current command being typed */}
          {displayedCommands < commands.length && (
            <div className="space-y-1">
              <div className="text-primary">
                {currentText}
                <span className="terminal-cursor inline-block w-2 h-4 bg-primary ml-0.5 align-middle" />
              </div>
              {showOutput && (
                <div className="space-y-1">
                  {commands[displayedCommands].output.map((line, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="text-foreground/90 pl-2"
                    >
                      {line}
                    </motion.div>
                  ))}
                </div>
              )}
            </div>
          )}
          
          {/* Final cursor after all commands */}
          {displayedCommands >= commands.length && (
            <div className="text-primary">
              $ <span className="terminal-cursor inline-block w-2 h-4 bg-primary ml-0.5 align-middle" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
