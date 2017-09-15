import os

files = os.listdir(os.path.join(os.getcwd(), "temp"))

for f in files:
    readFile = open(os.path.join(os.getcwd(), "temp", f), "rb")
    writeFile = open(os.path.join(os.getcwd(), f), "wb")
    for line in readFile:
        if line[:4] == 'year':
            writeFile.write('year: "'+ line[5:].strip() + '"\n')    
        else:
            writeFile.write(line)
    readFile.close()
    writeFile.close()
