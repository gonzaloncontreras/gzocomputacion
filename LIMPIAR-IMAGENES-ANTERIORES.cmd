@echo off
cd /d "%~dp0"
if exist "public\images\seguridad-escudo.svg" del /f /q "public\images\seguridad-escudo.svg"
if exist "public\images\asesoramiento-compra.svg" del /f /q "public\images\asesoramiento-compra.svg"
echo Limpieza completada.
pause
