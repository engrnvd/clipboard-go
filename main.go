package main

import (
	"embed"
	"github.com/wailsapp/wails/v2/pkg/options/mac"
	"github.com/wailsapp/wails/v2/pkg/options/windows"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:           "ClipboardGo",
		Width:           450,
		Height:          700,
		Frameless:       true,
		AlwaysOnTop:     true,
		CSSDragProperty: "widows",
		CSSDragValue:    "1",
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		Windows: &windows.Options{
			WebviewIsTransparent: true,
		},
		Mac: &mac.Options{
			WebviewIsTransparent: true,
			About: &mac.AboutInfo{
				Title:   "ClipboardGo",
				Message: "Copy Pasting reinvented to boost your productivity. © https://naveed-h.com",
			},
		},
		BackgroundColour: &options.RGBA{R: 0, G: 0, B: 255, A: 0},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
